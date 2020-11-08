function twoNumberSum(array, targetSum) {
	const result =  array.reduce((acc, value, idx, arr) => {
		if (acc.length == 2) {
			return acc
		}
		arr.forEach( v => {
			if (v + value == targetSum && v != value) {
				acc.push(v)
				acc.push(value)
			}
		})
		return acc
	}, [])
	return result
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

