export default function () {
	class Reg_Num_List {
		constructor() {
			this.list = [];
		}

		add(reg_num) {
			if (!this.list.includes(reg_num)) {
				this.list.push(reg_num);
			}
		}

		remove(reg_num) {
			if (this.list.includes(reg_num)) {
				this.list.splice(this.list.indexOf(reg_num));
			}
		}

		index(reg_num) {
			return this.list.indexOf(reg_num);
		}

		reg_num(index) {
			if (!isNaN(index) && index >= 0 && index < this.list.length) {
				return this.list[index];
			}
		}

		length() {
			return this.list.length;
		}
	}

	class Reg_Num {
		constructor(reg_num) {
			this.reg_num = reg_num.toUpperCase().trim();
		}

		string() {
			return this.reg_num;
		}

		isValid() {
			const valid_regex = /^C[AFGJKLNORTVWXYZ]( |)(\d{3,6}|(\d{1,5}(-| )\d{2,5}|\d{2,5}(-| )\d{1,5}))$/;
			return valid_regex.test(this.reg_num);
		}

		townCode() {
			const town_code_regex = /^C[A-Z]{1,2}/;
			return this.reg_num.match(town_code_regex)[0];
		}

		fromTown() {
			const towns = {
				'CA': 'Cape Town',
				'CF': 'Kuils River',
				'CG': 'Oudtshoorn',
				'CAM': 'Caledon',
				'CAR': 'Clanwilliam',
				'CAW': 'George'
			};

			if (this.isValid()) {
				return towns[this.townCode()];
			}
		}
	}

	return {
		Reg_Num_List,
		Reg_Num
	}
}