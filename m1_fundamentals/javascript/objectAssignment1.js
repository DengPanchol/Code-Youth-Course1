/*
Object
Question 1: Declare an object named User with the keys: 
username, password, email, id. 
Then console log the value of each
*/

const User = { 
    username: 'John', 
    password: 20,
    email: 'John@example.com',
    id: 12345
};

// accessing property
console.log(User.username); 
console.log(User.password);
console.log(User.email);    
console.log(User.id);
/*
Queston 2: Declare an object that has three key value pairs,
 "firstName", "lastName" and "score" 
 console.log() there name, and there score in a sentence 
 then console.log() the object and check it out in the console

 */
 const person = { 
    firstName: 'John', 
    lastName: "Sam",
    score: 50
};
console.log("My name is",person.firstName,person.lastName, "and Marks obtained is",person.score);
/*
Question 3: Declare an object named Car with the keys: 
make, model, year, milaeage, and 
2 methods: turnOn()-that has the string "The car has been turned on" 
and turnOff()-that has the string "The car has been turned off". 
Then console log each key
*/
const Car = {
    make: "",
    model: "",
    year: "",
    milaeage: ""
    // using function as a value
    
}

person.greet(); // hello