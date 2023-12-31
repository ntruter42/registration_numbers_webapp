import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import session from "express-session";
import flash from "express-flash";

import database_config from './config/db_setup.js';
import registration_routes from './routes/registration_routes.js';
import registration_models from "./models/registration_models.js";
import registration_services from "./services/registration_services.js";

// SETUP
const app = express();
app.use(express.static('public'));

app.engine('handlebars', engine({
	defaultLayout: 'main',
	viewPath: './views',
	layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	secret: "secret42",
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
app.use(flash());

// INSTANCES
const db = database_config();
const models = registration_models();
const services = registration_services(db, process.env.NODE_ENV);
const routes = registration_routes(services, models);

// ROUTES
app.get('/', routes.home);
app.post('/add', routes.add);
app.post('/clear', routes.clear);
app.get('/reg_number/:input', routes.show);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`App started on PORT: ${PORT}`);
});