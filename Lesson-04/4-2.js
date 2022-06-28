function treeSum(arr) {
	var sum = 0;

    for (var i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === 'object' && arr[i] !== null && arr.length !== 0) {
			sum += treeSum(arr[i]);
		} else if (typeof(arr[i]) === 'number' && !isNaN(arr[i])) {
			sum += arr[i];
		}
    }
	return sum;
}

console.log(treeSum([5, NaN, false, 7, [4, [2, true], 8, [1,null, 3], {age:35}, 2], [9, []], 1, 8]));
