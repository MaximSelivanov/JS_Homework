function treeSum(arr) {
	var sum = 0;

	for (k of arr) {
		if (typeof k == 'object' && k !== null) {
			sum += treeSum(k);
		} else if (typeof(k) === 'number' && !isNaN(k)) {
			sum += k;
		}
	}
	return sum;
}

console.log(treeSum([5, 'n', NaN, false, true, null, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));

