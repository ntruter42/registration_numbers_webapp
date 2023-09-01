export default function (db, schema) {
	async function getRegNums(town){
		const query = `SELECT * FROM ${schema}.registration_numbers`;
		let clause = '';

		if (town && town !== 'AA') {
			clause = ` WHERE town_code = '${town}'`;
		}

		// return await db.manyOrNone(query + clause);
		return (await db.query(query + clause)).rows;
	}

	async function getTowns() {
		const query = `SELECT * FROM ${schema}.towns ORDER BY town_code`;
		// return await db.many(query);
		return (await db.query(query)).rows;
	}

	async function addReg(reg_num, town_code) {
		const query = `INSERT INTO ${schema}.registration_numbers (reg_num, town_code) VALUES ('${reg_num}', '${town_code}')`;
		// await db.none(query);
		await db.query(query);
	}

	async function exists(reg_num) {
		const query = `SELECT count(1) FROM ${schema}.registration_numbers WHERE reg_num = '${reg_num}'`;
		// return (await db.one(query)).count > 0 ? true : false;
		return (await db.query(query)).rows[0].count > 0 ? true : false;
	}

	async function clearRegNums() {
		const query = `TRUNCATE TABLE ${schema}.registration_numbers`;
		// await db.none(query);
		await db.query(query);
	}

	return {
		getRegNums,
		getTowns,
		addReg,
		exists,
		clearRegNums
	};
};