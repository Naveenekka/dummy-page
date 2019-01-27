// Program for a template literal 

var a = "This is a simple line"
var b = "This is another line but there must be a full stop between them"

var CombinedSentence = `${a}.${b}`

conaole.log (CombinedSentence)

/* Output 
This is a simple line.This is another line but there must be a full stop between them

*/

// the program would be 
var a = "This is a simple line"
var b = "This is another line but there must be a full stop between them"

var CombinedSentence = `${a} and ${b}`

conaole.log (CombinedSentence)

/* then the output would be 
This is a simple line and This is another line but there must be a full stop between them
*/

// ANOTHER EXAMPLE //

let generateEmail = function (name, message){
    
    var emailMessage = 'Hi '+name+"\n"+
        "This is the message we have for you - \n"+
        message+"\n Copyright@edwisor 2018"

        return emailMessage;
} // end generate email

console.log (generateEmail("Naveen","Welcome to edwisor"))

// now the same program using the template literal

let generateEmail = function (name, message){
    
    var emailMessage = `Hi ${name}\n
        This is the message we have for you -\n
        ${message}\n 
        Copyright@edwisor 2018`

        return emailMessage;
} // end generate email

console.log (generateEmail("Naveen","Welcome to edwisor"))

// Program if there are multiple parameters in the input/function

let generateEmail = function (FirstName,LastName,message){
    
    var emailMessage = `Hi ${FirstName+" "+LastName}\n
        This is the message we have for you -\n
        ${message}\n 
        Copyright@edwisor 2018`

        return emailMessage;
} // end generate email

console.log (generateEmail("Naveen","Ekka","Welcome to edwisor"))


//Program in where the text is needed to be diaplayed as it is 

var someTextWithCurlyBraces = `this is some code with curly Braces
\${Here is the text}`

console.log(someTextWithCurlyBraces)

/* Output 
this is some code with curly Braces
${Here is the text}
 */ // So here it exactly shows what is the to be diaplayed as it is in the code.










































































































































