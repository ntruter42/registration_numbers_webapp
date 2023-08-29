export default function (db, schema, models) {
	async function getTowns() {
		const query = `SELECT * FROM ${schema}.towns`;
		return await db.many(query);
	}

	async function addReg(reg_num, town_code) {
		const query = `INSERT INTO ${schema}.registration_numbers (reg_num, town_code) VALUES ('${reg_num}', '${town_code}')`;
		await db.none(query);
	}

	return {
		getTowns,
		addReg
	};
}