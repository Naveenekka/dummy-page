// Simple variable that I want to store in an object
// original object

let firstName = "Naveen";
let lastName = "Ekka"

let nameOfPerson = {firstName:firstName,lastName:lastName}

console.log(nameOfPerson) 

/* output of the progream

firstName : "Naveen"
lastName : "Ekka"
*/

//now using the object literal 
let firstName = "Naveen";
let lastName = "Ekka"

let nameOfPerson = {firstName,lastName} // remove the same key or value and it will still show the same output//

console.log(nameOfPerson)

// claculations inside an object

let actualPrice = 50000
let discountPercentage = 10

let priceOfProduct = {
    actualPrice,
    discountPercentage,
    calculateFinalPrice(){
        return actualPrice (actualPrice*discountPercentage)/100
    }
}

console.log(priceOfProduct)
console.log(priceOfProduct.calculateFinalPrice())


//Eg of the above problem in a real case scenario :

let firstName = "Naveen";
let lastName = "Ekka";

let nameOfPerson = {
    firstName:firstName,
    lastName:lastName,

    calculateFullName () {
        return firstName+ " "+lastName
    }
}

// Program to display both key and value pair

let KeyIamSoring = "Some Key"
let ValueIamStoring = "Some Value"

let finalObject = {
    KeyIamSoring : ValueIamStoring
}

console.log(finalObject())

/* output of the above program would be :
KeyIamSoring : "Some Value"


but if the key pair also needs to be displayed in the variable form then  the below program should be written
*/
let KeyIamSoring = "Some Key"
let ValueIamStoring = "Some Value"

let finalObject = {
    [KeyIamSoring] : ValueIamStoring
}

console.log(finalObject())
/* output of the above program

"some Key" : "Some Value"
*/





































































