export default function (db, schema) {
	async function getRegNums(town){
		const query = `SELECT * FROM ${schema}.registration_numbers`;
		let clause = '';

		if (town && town !== 'AA') {
			clause = ` WHERE town_code = '${town}'`;
		}

		return await db.manyOrNone(query + clause);
	}

	async function getTowns() {
		const query = `SELECT * FROM ${schema}.towns ORDER BY town_code`;
		return await db.many(query);
	}

	async function addReg(reg_num, town_code) {
		const query = `INSERT INTO ${schema}.registration_numbers (reg_num, town_code) VALUES ('${reg_num}', '${town_code}')`;
		await db.none(query);
	}

	async function exists(reg_num) {
		const query = `SELECT count(1) FROM ${schema}.registration_numbers WHERE reg_num = '${reg_num}'`;
		return (await db.one(query)).count > 0 ? true : false;
	}

	async function clearRegNums() {
		const query = `TRUNCATE TABLE ${schema}.registration_numbers`;
		return await db.none(query);
	}

	return {
		getRegNums,
		getTowns,
		addReg,
		exists,
		clearRegNums
	};
};