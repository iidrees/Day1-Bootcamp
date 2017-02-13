module.exports = {
	class GTBankAccount {
		constructor(holderName, address, phoneNo, email) {
			this._holderName = name;
			this._address = address;
			this._phoneNo = phoneNo;
			this._email = email; 
		}
	    getFullAccountDetails() {
		    return ${this._holderName} ${this.address} ${this.phoneNo} ${this.email}
		}
	}

	class GTSavingsAccount extends GTBankAccount {
		constructor(holderName, address,phoneNo,email) {
			super(holderName,address,phoneNo,email);
			this._minimumBalance = cinimumBalance;
			this._currentBalance = currentBalance;
			this._interestCapitalised = interestPerMonth
			this.savingsAccountHolders = []
		}

		addAccountHolders(GTBankAccount) {
			this.savingsAccountHolders.push(GTBankAccount)
		}

		let tayeTaiwo = new GTSavingsAccount(taye Taiwo, Lagos, 123994039, taye@gmail.com)
		tayeTaiwo.addAccountHolders(tayeTaiwo)

	}

	class GTCurrentAccount extends GTBankAccount {
		constructor (holderName, address, phoneNo, email) {
			super(holderName,address,phoneNo,email);
			this._minimumBalance = minimumBalance;
			this._currentBalance = currentBalance;
			this.currentAccountHolders = [];
		}

		addAccountHolders(GTBankAccount) {
			this.currentAccountHolders.push(GTBankAccount)
		}

		let tayeTaiwo = new GTCurrentAccount(taye Taiwo, Lagos, 123994039, taye@gmail.com)
		tayeTaiwo.addAccountHolders(tayeTaiwo)
	}

}

