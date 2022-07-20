/*
1.
let arr = ["Hello", "What", "Are", "You"]

Find the length of each string in the array
Do once with forEach
Do once without forEach
*/
let arr = ["Hello", "What", "Are", "You"];
arr.forEach(element => {
    console.log("length of each element",element.length);
});

for(let i = 0; i < arr.length; i++){
    console.log("length of each element",arr[i].length);
}
/*
2.
let numArray = [13, 84, 21, 58, 41, 20, 63]

Using filter, create a new array that includes every number under 50
Then console.log your new array
Do once with filter
Do once without filter
*/
let numArray = [13, 84, 21, 58, 41, 20, 63]
let newArray = numArray.filter((num) => num<50);
console.log("New array", newArray);
let res = [];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i]< 50){
        res.push(numArray[i]);
    }
}
console.log("results = ", res);
/*
3.
Using sort, sort the array you made in the last question
*/
console.log("sorted array = ",res.sort());


/*
4.
let marks = [85,19,94,77,10,73,60,59,18,6,24,33,19,5,82]

Create two new arrays for passed and failed using the array above (a passing grade is 80 or above)
Console.log both of them on seperate lines
Do once with filter
Do once without filter
*/
let marks = [85,19,94,77,10,73,60,59,18,6,24,33,19,5,82];