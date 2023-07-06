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

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array5 = [5, 2, 4, 6, 1, 3];
console.log(mergeSort(array5));

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
