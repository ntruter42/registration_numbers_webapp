import promise from "pg-promise";
import "dotenv/config";

export default function Database() {
	const pgp = promise();
	const db = pgp({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		connectionString: process.env.DB_URL,
		ssl: {
			rejectUnauthorized: true
		} 
	});
	return db;
}