import promise from "pg-promise";
// import pg from "pg";
import "dotenv/config";

export default function Database() {
	const pgp = promise();
	const db = pgp({
		connectionString: process.env.DB_URL,
		ssl: {
			rejectUnauthorized: false
		}
	});

	// const db = new pg.Client({
	// 	user: process.env.PGUSER,
	// 	host: process.env.PGHOST,
	// 	database: process.env.PGDATABASE,
	// 	password: process.env.PGPASSWORD,
	// 	port: process.env.PGPORT
	// });
	// await db.connect();

	return db;
}