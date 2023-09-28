function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			return "FizzBuzz";
		} else if (i % 3 === 0) {
			return "Fizz";
		} else if (i % 5 === 0) {
			return "Buzz";
		} else {
			return i;
		}
	}
}

//
//
function isFizzBuzz(num: number) {
	if (num % 3 === 0 && num % 5 === 0) {
		return "FizzBuzz";
	}
	return num;
}

function isFizz(num: number) {
	if (num % 3 === 0) {
		return "Fizz";
	}
	return num;
}

function isBuzz(num: number) {
	if (num % 5 === 0) {
		return "Buzz";
	}
	return num;
}

function checkNumber(num: number) {
	let result: number | "FizzBuzz" | "Fizz" | "Buzz" = num;
	result = isFizzBuzz(num);
	isFizz(num);
	isBuzz(num);
	return num;
}

function fizzBuzzS() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			return "FizzBuzz";
		} else if (i % 3 === 0) {
			return "Fizz";
		} else if (i % 5 === 0) {
			return "Buzz";
		} else {
			return i;
		}
	}
}
