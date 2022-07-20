
/*
Create an object that describes a book and has properties for the title (a string), author (a string), 
and alreadyRead (a boolean indicating if you read it yet).
For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like 'You already read 
"The Hobbit" by J.R.R. Tolkien', and if not, 
log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

const book1 = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false,
    checkStatus: function () {
        if(this.alreadyRead === true){
            console.log('You already read',this.title, this.author);
        }else{
            console.log('You will need to read',this.title, this.author); 
        }
    }
}

book1.checkStatus();

/*
The Reading List
Keep track of which books you read and which books you want to read!
Create an array of objects, where each object describes a book and has 
properties for the title (a string), author (a string), and alreadyRead 
(a boolean indicating if you read it yet).
Iterate through the array of books. For each book, 
log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, 
log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

const books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: true
    },

    {
        title: 'When the Sun Goes Down and other Stories from Africa',
        author: 'By Emilia Ilieva',
        alreadyRead: false
    }
]

for(let item in books){
    if(books[item].alreadyRead === true){
        console.log('You already read',books[item].title, books[item].author);
    }else{
        console.log('You will need to read',books[item].title, books[item].author); 
    }
}



/*
Create an object to hold information on your favorite recipe. 
It should have properties for title (a string), servings (a number), 
and ingredients (an array of strings).
On separate lines (one console.log statement for each), 
log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

const recipe = {
    title:"Mole",
    servings: 2,
    ingredients: ["cinnamon","cumin","cocoa"]
}
console.log("Mole",recipe.title)
console.log("Services: ",recipe.servings)
console.log("Ingredient:");
for(let key in recipe.ingredients){
    console.log(recipe.ingredients[key])
}