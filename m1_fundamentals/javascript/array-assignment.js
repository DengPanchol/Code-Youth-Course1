/*
Question 1: Create an array with the items, cat, and dog, 
than add bird to it using push()
*/
let animals = ["cat", "dog"];
animals.push("bird"); // This will add an element to the end of an array.
console.log(animals);

/*
Question 2: Remove an item from an array using pop() method
*/
let element = animals.pop(); // remove last element from the array
console.log("Deleted",element);
console.log(animals);

/*
Question 3: Make an array with following numbers: [1,3,5,8,9,10,8]. 
Then check if the array has the number 8 console.log it's position
*/
let numbers = [1,3,5,8,9,10,8];
let check = 8;
for(i=0; i<numbers.length; i++){
    if(check==numbers[i]){
        console.log("The position of 8 is: ",i);
    }
}


/*
Question 4: Create the following array: 
['burger', 'fries', 'coke', 'donuts', 'salad', 'nuggets'], 
then remove the first 3 elements, and then add them back on at the end 
Hint: Variables are like boxes
*/

let foodItems = ['burger', 'fries', 'coke', 'donuts', 'salad', 'nuggets'];
//Slice part of an array
let slicedarr = foodItems.slice(0,3);
//food = slicedarr;
foodItems =foodItems.slice(3,6);
foodItems = slicedarr.push('burger', 'fries', 'coke')

console.log("Slice",slicedarr);
console.log("foodItems",foodItems);

/*
Question 5: Create the following array [1, 2, 3, 4, 5, 6, 7, 8, 9, 19], then remove numbers "4, 5, and 6" and put them in a new array
*/