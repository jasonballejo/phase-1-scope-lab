// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = `not ${customerName.toLowerCase()}`
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 2

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 3
    console.log(changeLeastFavoriteCustomer)
}