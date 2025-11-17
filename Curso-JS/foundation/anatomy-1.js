// Function declaration

function sayHello(){
    console.log("Olá tudo bão")
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}
    
sayHelloTo('neto')

function returnHi(){
    return 'Hi'
}

const greeting = returnHi()
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}`
}

console.log(returnHiTo('john'))