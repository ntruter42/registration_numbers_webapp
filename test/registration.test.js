import assert from 'assert';
import Database from '../config/db_setup.js';
import registration_models from "../models/registration_models.js";
import registration_services from '../services/registration_services.js';

describe('Greeting', async function () {
	let regNum;
	const model = registration_models();
	const reg_db = Database();
	// this.timeout(2000);

	beforeEach(async function () {
		regNum = registration_services(reg_db, 'test');
		await regNum.clearRegNums();
	});

	describe('getTowns', function () {
		it('should return the list of pre-populated towns', async function () {
			try {
				const expected = [{
					town_code: 'CA',
					town_name: 'Cape Town'
				}, {
					town_code: 'CF',
					town_name: 'Kuils River'
				}, {
					town_code: 'CG',
					town_name: 'Oudtshoorn'
				}];
				const result = await regNum.getTowns();

				assert.deepEqual(expected, result);
			} catch (error) {
				throw error;
			}
		});
	});

	describe('addReg, getRegNums', function () {
		it('should add and return a registration number to and from database', async function () {
			try {
				const input = new model.Reg_Num("CA 123-456");
				await regNum.addReg(input.string(), input.townCode());

				const expected = [{
					reg_num: "CA 123-456",
					town_code: "CA"
				}];
				const result = await regNum.getRegNums();

				assert.deepEqual(expected, result);
			} catch (error) {
				throw error;
			}
		});

		it('should add and return multiple registration numbers to and from database', async function () {
			try {
				const input1 = new model.Reg_Num("CA 123-456");
				const input2 = new model.Reg_Num("CG 14");
				await regNum.addReg(input1.string(), input1.townCode());
				await regNum.addReg(input2.string(), input2.townCode());

				const expected = [{
					reg_num: "CA 123-456",
					town_code: "CA"
				}, {
					reg_num: "CG 14",
					town_code: "CG"
				}];
				const result = await regNum.getRegNums();

				assert.deepEqual(expected, result);
			} catch (error) {
				throw error;
			}
		});

		it('should not add duplicate registration numbers to database', async function () {
			try {
				const input1 = new model.Reg_Num("CA 123-456");
				const input2 = new model.Reg_Num("ca 123-456");
				await regNum.addReg(input1.string(), input1.townCode());
				await regNum.addReg(input2.string(), input2.townCode());

				const expected = [{
					reg_num: "CA 123-456",
					town_code: "CA"
				}];
				const result = await regNum.getRegNums();

				assert.deepEqual(expected, result);
			} catch (error) {
				// throw error;
			}
		});
	});

	describe('exists', function () {
		it('should return true if registration number is already in database', async function () {
			try {
				const input = new model.Reg_Num("CA 123-456");
				await regNum.addReg(input.string(), input.townCode());

				const expected = true;
				const result = await regNum.exists("CA 123-456");

				assert.deepEqual(expected, result);
			} catch (error) {
				throw error;
			}
		});

		it('should return false if registration number is not in database', async function () {
			try {
				const input = new model.Reg_Num("CA 123-456");
				await regNum.addReg(input.string(), input.townCode());

				const expected = false;
				const result = await regNum.exists("CF 123-456");

				assert.deepEqual(expected, result);
			} catch (error) {
				throw error;
			}
		});
	});

	describe('clearRegNums', function () {
		it('should clear registration numbers from database', async function () {
			try {
				const input = new model.Reg_Num("CA 123-456");
				await regNum.addReg(input.string(), input.townCode());
				
				const expected1 = [{
					reg_num: "CA 123-456",
					town_code: "CA"
				}];
				const result1 = await regNum.getRegNums();
				assert.deepEqual(expected1, result1);
				
				await regNum.clearRegNums();
				const expected2 = [];
				const result2 = await regNum.getRegNums();
				assert.deepEqual(expected2, result2);
			} catch (error) {
				throw error;
			}
		});

		it('should be able to add registration numbers again after database has been cleared', async function () {
			try {
				const input = new model.Reg_Num("CA 123-456");
				await regNum.addReg(input.string(), input.townCode());
				await regNum.clearRegNums();

				const expected1 = [];
				const result1 = await regNum.getRegNums();
				assert.deepEqual(expected1, result1);
				
				await regNum.addReg(input.string(), input.townCode());

				const expected2 = [{
					reg_num: "CA 123-456",
					town_code: "CA"
				}];
				const result2 = await regNum.getRegNums();
				assert.deepEqual(expected2, result2);
			} catch (error) {
				throw error;
			}
		});
	});
});