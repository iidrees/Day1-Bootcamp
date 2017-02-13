module.exports = {
	getPrimes: function(n) {
		var primesArray = [];
		if ( n > 1) {
			for (var i = 0; i <= n; i ++) {
				for (var j = 2; j <=i; j++) {
					if (i % j === 0) {
						return i;
					}
				}
				return primeArray.push(i)
			}
		} else if (n < 1 || n === 0) {
			return ('Zero is not a prime')
		} else if (n < 0) {
			return 'no negative input value allowed'
		} else if (n === typeof(string)) {
			return 'invalid input, enter a number.'
		}
		};
	};
};