export default function (reg_db, reg_app) {
	function home(req, res) {
		res.render('index');
	}

	return {
		home
	}
}