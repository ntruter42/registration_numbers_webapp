export default function (reg_db, models) {
	async function show(req, res) {
		const reg_num = new models.Reg_Num(req.params.input);

		res.render('registration', {
			regNum: reg_num.string()
		});
	}

	async function home(req, res) {
		const regList = (await reg_db.getRegNums()).reverse();
		const towns = await reg_db.getTowns();
		const error = req.flash('error')[0];
		const success = req.flash('success')[0];
		const message = {
			text: error ? error : success,
			type: error ? 'error' : 'success'
		};

		let empty = false;
		if (regList.length === 0) {
			empty = true;
		}

		res.render('index', {
			empty: !empty,
			regList,
			towns,
			message
		});
	}

	async function add(req, res) {
		const reg_num = new models.Reg_Num(req.body['reg-input']);

		if (!req.body['reg-input']) {
			req.flash('error', "Enter a registration number");
		} else if (!reg_num.isValid()) {
			req.flash('error', "Enter a valid registration number");
		} else if (await reg_db.exists(reg_num.string())) {
			req.flash('error', "Registration number already exists");
		} else {
			await reg_db.addReg(reg_num.string(), reg_num.townCode());
			req.flash('success', "Registration number added");
		}

		res.redirect('/');
	}

	async function clear(req, res) {
		await reg_db.clearRegNums();
		req.flash('success', "Registration numbers cleared");

		res.redirect('/');
	}

	return {
		home,
		add,
		clear,
		show
	}
}