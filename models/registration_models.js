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
			// TODO: add validation regex here
			const valid_regex = '';
			return valid_regex.test(this.reg_num);
		}

		townCode() {
			// TODO: update regex for custom plates
			return this.reg_num.match(/C[A-Z]+/)[0];
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