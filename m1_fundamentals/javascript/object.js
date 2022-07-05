/*
create an object student with properties:
id,
name,
address, another object
email,
phone,
marks, array

in string form display:
student John with id(1)
*/
let student = {
    id: "1",
    name: "John",
    address:{city:"Ottawa",
            province:"Ontario",country:"Canada"},
    email:"john@gmail.com",
    phone:123456789,
    marks:[60,70]
}

console.log("My name is",student.name, ", student number:", student.id,", country: ",student.address.country,", and Marks obtained is",student.marks[0]);