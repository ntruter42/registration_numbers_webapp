export default function (reg_db, models) {
	async function home(req, res) {
		const towns = await reg_db.getTowns();

		res.render('index', {
			towns
		});
	}

	function add(req, res) {
		const reg_num = new models.Reg_Num(req.body['reg-input']);

		res.redirect('/');
	}

	return {
		home,
		add
	}
}