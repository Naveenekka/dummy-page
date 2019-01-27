// for In loop example 2
// this is the program with the array of objects 

var customers = [{
    'CustId':'123',
    'signedUpDate':'2016-12-11'
},
{
    'CustId':'456',
    'signedUpDate':'2015-09-11'
}
]

for (x of customers)
{
    console.log(x)
}

//or also the program can be written as 

for (customer of customers)
{
    console.log(customer)
}