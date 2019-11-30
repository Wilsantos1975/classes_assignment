// // ## Question 1
// // a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name.
// //  Create 2 instances of a `Person`. Print one of their first names.
// // b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. 
// // Call this method on both the instances you created in part a.

// class Person {
//     constructor(firstName, middleName, lastName){
//      this.firstName = firstName
//      this.lastName = lastName
//      this.middleName = middleName
//     }
//     fullName(){ 
//         return this.firstName +" "+ this.middleName +" "+ this.lastName
//         }  
// }
// let cheryl = new Person("Cheryl", "Anne", "Paprocki")
// let wil = new Person("Fausto", "Wilghen", "Santos")
//  console.log(cheryl.firstName)
//  console.log(wil.firstName)
//  console.log(cheryl.fullName())

// //  ## Question 2
// // a. Create a class called `Book` that has properties `title`, `author` and `rating`. 
// // Create some instances of `Book`.
// // b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

// class Book {
//     constructor(title,author,rating){
//         this.title = title
//         this.author = author
//         this.rating = rating
//     }
//     isGood(){
//         if (this.rating >= 7) {
//             return "this book is the true shit-nizzle"
//         } else {
//             return "Don't waste your time"
//         }
//     }
// }

// let lord = new Book("Lord of the rings","J.R.R. Tolkien",8.2);
// let alchemist = new Book("The Alquemist","Paulo Coelho",7.0);
// let amor = new Book("Amor en los tiempos de colera", "Gabriel Garcia Marquez", 6.6)
// let quijote = new Book("Don Quijote", "Miguel de Cerventes", 9.0)

// console.log(alchemist.isGood())

// // ## Question 3
// // a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
// // b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, 
// // set its mood property to `playful`, and log "Ruff!"
// // c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" 
// // If the dog is not hungry, it should log "The dog doesn't look hungry"
// // d. Add a method called `toString` that returns a description of the dog:

// class Dog {
//     constructor(name,breed,mood,_hungry){
//         this.name = name
//         this.breed = breed
//         this.mood = mood
//         this._hungry = _hungry

//     }
//     playFetch(){
//         if(this._hungry === true) {
//             this.mood = "Playful"
//             return "RUFF!"
//         }
//     }
//     feed(){
//         if(this._hungry === true){
//             this._hungry === false
//             return "WHOOFF!"
//         } else {
//             this._hungry === false
//             return "the dog does not look hungry"
//         }
//     }
//     toString(){
//         return this.name +" " +this.breed+" "+this.mood+" "+this._hungry
//     }
// }
// let fido = new Dog("Fido", "Yorkie", "happy", false)
// console.log(fido.toString())

// // # Question 4
// // There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
// // C = (F - 32) / 1.8
// // F = 1.8 * C + 32
// // K = C + 273
// // a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. 
// // Give them all values equal to the freezing point of water.
// // b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// // ```js
// // let outsideTempt = new Celsius(10.0)
// // outsideTempt.celsius //returns 10.0
// // outsideTempt.getKelvinTemp() //returns 283.0
// // outsideTempt.getFahrenheitTemp() //returns 50.0
// // c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

// class freezingPoint {
//     constructor(celsius,fahrenheit,kelvin){
//         this.celsius = 0
//         this.fahrenheit = 32
//         this.kelvin = 273.2
//     }
// }
// class Celsius {
//     constructor(celsius){
//         this.celsius = celsius
//     }
//     getFahrenheitTemp(){
//         return 1.8 * this.celsius + 32
//     }
//     getKelvinTemp(){
//         return this.celsius + 273
//     }
//     isBelowFreezing(){
//         if(this.celsius <= 0){
//         return true
//     } else {
//         return false
//     } 
//     }          
// }
// let outsideTemp = new Celsius(10.0)
// console.log(outsideTemp.getKelvinTemp())

// # Question 5
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. 
// Create an instance of your `Movie`
// b. Create an method inside `Movie` called `blurb` 
// that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting 
// America from Kazakhstan."

// class Movie {
//     constructor(name,year,genre,cast,description){
//         this.name = name;
//         this.year = year;
//         this.genre = genre;
//         this.cast = cast;
//         this.description = description
//     }
//     blurb(){
//         return 'shawshank redemptiom tells the story of a convict who finds himself out of jail where he was put by injustice'
//     }
// }
// let pulp = new Movie("Pulp Fiction", "1993","drama", "john Travolta and bruce wilis", "a gangters find himself involved in a revealing ephyfany")
// let shawshank = new Movie("Shanwshank Redemption","1994","Adventure", "morgan freeman & tim robbins", "a convict finds a way out of the jail")
// console.log(shawshank.blurb())
// console.log(pulp)
// console.log(pulp.blurb())
// console.log(shawshank)

// ## Question 7
// a. Write a class called `Cylinder` that has properties `radius` and `height`.  
// Create an instance of a Cylinder.
// b. Add an instance method `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)
// c. Add an instance method `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)

// class Cylinder {
//     constructor(radius,height){
//         this.radius = radius
//         this.height = height
//     }
//     getVolume(){
//         return ((pi * Math.pow(this.radius,2)) * this.height)
        
//     }
//     getSurfaceArea(){
//         return this.radius * this.height

//     }
// }
// let pi = 3.142
// let cylinder = new Cylinder(35, 64)
// console.log(cylinder.getVolume())
// console.log(cylinder.getSurfaceArea())

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)
// a. Write a class called `Post` that has properties `datePosted`, `user`, and `text`.  
// Create an array of `Post` objects.
// b. Create an instance method that returns whether or not the post was made today.
// c. Filter your array of `Post` objects to only include posts made today.

// class Post{
//     constructor(datePosted,user,text) {
//         this._datePosted = datePosted
//         this._user = user
//         this._text = text
//     }
//     todayPost(){
//         if(this._datePosted = Date){
//             return 
//         }
//     }
// }
// let post = [{datePosted:11/23/76}, ]

// ## Question 10
// a. Make a class called `Vehicle` with properties `color` and `name`.  
// Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"

class Vehicle {
    constructor(color, name){
        this.color = color
        this.name = name
    }
    makeSound() {
        return "WHHOOSSSH"
    }
}
class Car extends Vehicle {
    constructor(color, name) {
        super(color,name)
    }
}
class Bike extends Vehicle {
    constructor(color,name){
        super(color,name)
    }

}
let toyota = new Car("red", "carry McCarface")
let ducatti = new Bike("green", "Bikey McBikeFacee")

console.log(toyota)