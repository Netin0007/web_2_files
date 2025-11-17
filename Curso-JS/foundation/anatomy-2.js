// anonymous function

(function(a,b,c){
    a + b + c
})

// expression function

const sum = function (a,b){
    return a + b
}

const result = sum(7, 59)
console.log(result)

//Usando a mesma função é fazendo outra chamada
anotherSum = sum 
console.log(anotherSum(10, 15))