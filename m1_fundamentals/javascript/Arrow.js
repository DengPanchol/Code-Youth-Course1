// Create an arrow function Area that will find the area of the rectangle
// Area1(4,5), use return statement.
const Area1 = (width,length) => {return length*width};
 console.log("Area of rectangle = ", Area1(4,5));


 /*
 Question 1: Create an arrow function that takes parameters First and Last Name, 
 then log the following msg to the console: 
 "My name is (first name) but I prefer you call me mr/mrs (last name)
 */
 const MyName = (firstName,lastName) => {
    console.log("My name is", firstName, " but I prefer you call me Mr", lastName)
 }


 const loc = (province, city, name) => {
    console.log("My name is", name, "and I live in", province, "in the city of", city)
}
 
 MyName("Deng","Mading");
 loc("Ontario","Ottawa","Steven");




 