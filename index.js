function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > currentValue) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = currentValue;
	}
	return arr;
}

const array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array));

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

const array2 = [5, 2, 4, 6, 1, 3];
console.log(selectionSort(array2));

function bubbleSort(arr) {
	const length = arr.length;
	for (let i = 0; i < length - 1; i++) {
		for (let j = 0; j < length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

const array3 = [5, 2, 4, 6, 1, 3];
console.log(bubbleSort(array3));

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[Math.floor(Math.random() * arr.length)];
	const less = [];
	const equal = [];
	const greater = [];

	for (let element of arr) {
		if (element < pivot) {
			less.push(element);
		} else if (element === pivot) {
			equal.push(element);
		} else {
			greater.push(element);
		}
	}

	return quickSort(less).concat(equal, quickSort(greater));
}
const array4 = [5, 2, 4, 6, 1, 3];
console.log(quickSort(array4));
