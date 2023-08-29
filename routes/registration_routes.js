export default function (reg_db, models) {
	async function home(req, res) {
		const towns = await reg_db.getTowns();
		const error = req.flash('error')[0];
		const success = req.flash('success')[0];
		const message = {
			text: error ? error : success,
			type: error ? 'error' : 'success'
		};

		res.render('index', {
			towns,
			message
		});
	}

	function add(req, res) {
		const reg_num = new models.Reg_Num(req.body['reg-input']);
		if (!req.body['reg-input']) {
			req.flash('error', "Enter a registration number");
		} else if (!reg_num.isValid()) {
			req.flash('error', "Enter a valid registration number");
		} else {
			reg_db.addReg(reg_num.string(), reg_num.townCode());
			req.flash('success', "Registration number added");
		}

		res.redirect('/');
	}

	return {
		home,
		add
	}
}