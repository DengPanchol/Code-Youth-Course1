let color = ["Green", "Purple", "White", "Black"];
color.push("Grey"); // This will add an element to the end of an array.
console.log(color);

let element = color.pop(); // remove last element from the array
console.log("Deleted",element);
console.log(color);

// unshift remove first element from the array
color.unshift("Pink");
console.log("unshift",color);

// unshift remove second element from the array
let item = color.shift();
console.log("shift ",color);

//Slice part of an array
let slicedarr = color.slice(1,4);
console.log("Slice",slicedarr);

//sorted array
let sortedArr = color.sort();
let numbers = [5,7,12,67,34,10];
console.log("Sort",sortedArr);
console.log("Sort numbers1",numbers.sort());

//reverse array
let reverseArr = color.reverse();
console.log("Reversed",reverseArr);


