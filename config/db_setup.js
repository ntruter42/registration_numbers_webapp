// import promise from "pg-promise";
import pg from "pg";
import "dotenv/config";

export default async function Database() {
	// const pgp = promise();
	// const db = pgp({
	// 	// host: process.env.DB_HOST,
	// 	// port: process.env.DB_PORT,
	// 	// database: process.env.DB_NAME,
	// 	// user: process.env.DB_USER,
	// 	// password: process.env.DB_PASSWORD,
	// 	connectionString: process.env.DB_URL,
	// 	ssl: {
	// 		rejectUnauthorized: false
	// 	}
	// });
	
	const db = new pg.Client({
		user: process.env.PGUSER,
		host: process.env.PGHOST,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		port: process.env.PGPORT
	});
	await db.connect();

	return db;
}