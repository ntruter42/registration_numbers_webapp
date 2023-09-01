import assert from 'assert'
import Database from '../services/database.js';
import RegNum from '../services/greeting.js';
import Greet from '../applications/greet.js';

describe('Greeting', async function () {
	let greeting, greet;
	let database = Database();
	this.timeout(5000);

	beforeEach(async function () {
		greet = Greet();
		greeting = Greeting(database, 'test', greet);
		await greeting.resetNames();
	});

	describe('addName, getUserData', function () {
		it('should be able to set a name in database and return data for given username', async function () {
			try {
				
				assert.equal(expected.xhosa, result.xhosa);
			} catch (error) {
				throw error;
			}
		});
	});
});