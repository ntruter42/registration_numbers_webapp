export default function (db, schema, models) {
	async function getTowns() {
		const query = `SELECT * FROM ${schema}.towns`;
		return await db.many(query);
	}

	return {
		getTowns
	};
}