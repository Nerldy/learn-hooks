function* foo(index) {
	while (index < 2) {
		yield index++;
	}
}

var a = [1, 2, 3];

function* checi(arr = []) {
	for (var i = 0; i < arr.length; i++) {
		yield arr[i];
	}
}

var b = checi(a);
console.log(b.next().value);
