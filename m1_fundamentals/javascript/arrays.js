/*Arrays
Question 1: Make an array with 3 different data types (string, number, boolean)
Question 2: Create an array with 3 names then console.log the array length
Question 3: In the previous question, console.log just the first name
*/

const array_name = ["banana","orange" ,"mango", 20, 7, 10,true, true, false,true];    
console.log("The 7th element of the array is ", array_name[6]);

const myLength = ["Deng", "Steven", "John"];
console.log("The length of the array is ", myLength.length);
console.log("The first element of the array is",myLength[0]);

let arr1 = [5,6,7,8,9,10];

//for loop to access all elements of the array
for(let i = 0; i < arr1.length; i++){
    arr1[i]=arr1[i]*arr1[i];
    console.log("Square: ", arr1[i]);
}
