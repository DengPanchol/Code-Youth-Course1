/*
1.
Write an object that has two objects inside it named "test0" and "test1"
inside both objects write the keys "testName", "numParticipants", and "testPass"
fill the values as you want with testName being a string, numParticipants being a number, 
and testResult being a boolean

check both tests using for in
if it passed console.log(testName, "Passed with", numParticipants, "participants")
if it failed console.log(testName, "Failed with", numParticipants, "participants")

then console.log() your object
*/
//Objects
let test = {
	test0:{
		testName:"test0",
		numParticipants:123,
		testPass:true
	},
    test1:{
		testName:"test1",
		numParticipants:123,
		testPass:false
	} 
};
//object for loop
for(let key in test){
    if(test[key]["testPass"]==true){
	    console.log(test[key]["testName"],"Passed with",test[key]["numParticipants"],"participants");
    }else{
        console.log(test[key]["testName"],"failed with",test[key]["numParticipants"],"participants");
    }
}

/*
2.
Write an object with 4 objects inside it. give those objects the names of books
inside those objects write the keys "Author", "publisher", "releaseDate"

console.log() each book name and it's information
*/