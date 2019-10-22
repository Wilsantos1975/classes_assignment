//Question 1a. & 1b.
class Person {
    constructor(firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }
    fullName() {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

let brandon = new Person("Brandon", "Brown", "O'neil")
let wil = new Person("Wil", "Fausto", "Santos")
console.log(wil.firstName)
console.log(wil.fullName())
console.log(brandon.fullName())

//Question 2

class Book {
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating
    }
    isGood(){
        if(this.rating >= 7){
            return true
        }else {
            return false
        }
    }
}
let theRaven = new Book("The Raven", "Edgar Allen Poe", 5)
let theAlchemist = new Book("The Alchemist", "Paulo Coelho", 8)
let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 10)

console.log(theRaven.isGood())
