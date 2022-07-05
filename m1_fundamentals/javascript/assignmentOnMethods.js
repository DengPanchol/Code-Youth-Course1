/*
Array Methods
Question 1: Create the following array [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,] 
then using filter method, create a new array that has numbers over 40
*/
const marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,];
// filter 
let newArray = marks.filter((mark) => mark>40);
console.log("New array", newArray);

/*
Question 2: Create the following array ['ice cream', 'cookies', 'pancakes'] 
then using forEach method, console log the phrase: "I love (array item). 
Your log should look like: "I lo(ve ice cream, I love cookies" etc
*/
const forArray = ['ice cream', 'cookies', 'pancakes'];
forArray.forEach(element => console.log("I love ",element ));

/*
Question 3: Create the following array ['user1', 'user2', 'user3'] 
then using map method, create a new array that replaces the users with the names 'mark', 'mike', 'milo'
*/

const users = ['user1', 'user2', 'user3'];
const userNames = ['mark', 'mike', 'milo'];
let newUsers = users.map((num) => userNames);
console.log("newUsers",newUsers);
/*
Question 4: Create the following array: [2, 2, 2, 2,], 
then add all the array items together using the reduce method
*/
const numbers = [2, 2, 2, 2];
let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log("Sum = ",sum);