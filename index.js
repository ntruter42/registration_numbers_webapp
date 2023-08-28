import express from "express";
import { engine } from "express-handlebars";

import database_config from './config/db_setup.js';
import registration_routes from './routes/registration_routes.js';

// SETUP
const app = express();
app.use(express.static('public'));

app.engine('handlebars', engine({
	defaultLayout: 'main',
	viewPath: './views',
	layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

// INSTANCES
const db = database_config();
const routes = registration_routes();

// ROUTES
app.get('/', routes.home);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`App started on PORT: ${PORT}`);
});