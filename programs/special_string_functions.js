var vegetables = ["Carrots","Potatoes","Tomato","Pumpkin","Spinach","Turnips","Mushrooms","Broccoli"];

/*//to change the array to string //
var convertedString = vegetables.toString()

alert (convertedString)
*/

// use of push and pop //
/*vegetables.push("Ginger") // push will add a new element to the array //
alert(vegetables)

vegetables.pop() // this pop will remove the last element from the array //
alert(vegetables) */

// use of shift and unshift //
vegetables.shift() // here the shift will remove the first element from the begining of the array //
alert(vegetables)

vegetables.unshift("Ginger") // here the unshift will add the "ginger" to the  first element from the begining of the array //
alert(vegetables)

// changing element at an index //
vegetables[2] = "lettuce"
alert(vegetables)

//to delete an element at an index //
delete vegetables[1]
alert(vegetables)

// Merging two arrays //
var fruits = ["Apples","Orange","Banana"]
var mergedArray = vegetables.concat(fruits)
alert(mergedArray)