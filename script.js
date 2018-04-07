// POSITIVE NUMBERES
function positiveNumbers(array) {
	return array.filter(function(item){
		return item > 0;
	});
}

// EVEN NUMBERS 
function evenNumbers(array) {
	return array.filter(function(item){
		return item % 2 == 0;
	});
}

// SQUARE THE NUMBERS
function squareTheNumbers(array) {
	return array.map(function(item){
		return item*item;
	});
}

// CITIES 1
function cities1(array) {
	return array.filter(function(item){
		return item.temperature < 70;
	});
}

// CITIES 2
function cities2(array) {
	return array.map(function(item){
		return item.name;
	});
}

// GOOD JOB
function goodJob(array) {
	array.forEach(function(item) {
		console.log("Good job, " + item + "!");
	});
}

// SORT 1 
function sort1(array) {
	array.sort();
}

// SORT 2
function sort2(array) {
	array.sort(function(a, b){
		return a.length - b.length;
	});
}

// SORT 3
function sort3(array) {
	array.sort(function(a, b){
		var sum = function(acc, item) {
			return acc + item;
		}
		var aSum = a.reduce(sum, 0);
		var bSum = b.reduce(sum, 0);
		return aSum - bSum;
	});
}

// 3 TIMES
function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(function(){
	console.log("Hello, world!");
})

// N TIMES
function callNTimes(num, fun) {
	for (var i=0; i<num; i++) {
		fun();
	}
}

// SUM
function sum(array) {
	return array.reduce(function(acc, item){
		return acc + item;
	}, 0)
}

// ACRONYM
function acronym(array) {
	return array.reduce(function(acc, item){
		return acc + item[0];
	}, "");
}

// FOR EACH
function forEach(array, fun) {
	for (var i=0; i<array.length; i++) {
		fun(array[i]);
	}
}

// MAP
function map(array, fun) {
	var newArray = [];
	for (var i=0; i<array.length; i++) {
		var currentItem = array[i];
		newArray.push(fun(currentItem));
	}
	return newArray;
}

// CAESAR CIPHER
function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return text.split('').map(function(chr){
	var idx = alphabet.indexOf(chr.toUpperCase());
	var newIdx = idx + 13;
	if (newIdx >= alphabet.length) {
      newIdx -= 26;
    }
    return alphabet[newIdx];
  }).join('');
 
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');
console.log('GENIUS');
console.log(encrypted);