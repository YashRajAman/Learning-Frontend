//Primitive and Non Primitive
//Call By Value and Call by reference

/*Primitives: --
String, Number, Boolean, null, undefined, Symbol, BigInt
Stack memory is used
*/

let score = 100;
let names = "Yash";
let myname = new String("YASH RAJ AMAN")
let isHuman = true;
let partyNight = null;
let animalInstinct = undefined;
let uniqueName = Symbol("Yash");
let bigNumber = BigInt(100**10);
let bigNumAlt = 10012n

console.table([typeof(score), typeof(names), typeof(isHuman), typeof(partyNight), typeof(animalInstinct), typeof(uniqueName), typeof(bigNumber), typeof(bigNumAlt)])


/* Non Primitive or Reference type
Array, Object, Function, 
Heap memory is used
*/

const heroes = ['Shaktimaan', 'Naagraj', "Druv", "Shakti", 'Atom']  //list typeof object
let kv = {1:"Yash", 2:"Raj", "Hero":"Aman"}                         //dictionary typeof object

console.log(heroes)
console.log(typeof(heroes))

console.log(kv)
console.log(kv['Hero'])
console.log(typeof(kv))

let myobject = {
    name: "Yash",
    age: 25,
    isHuman: true
}

console.log(myobject)
console.log(myobject.name)
console.log(myobject['age'])

//funtion typeof funtion
const myfunction = function(x,y){
    console.log(x + y)
}

console.log(typeof myfunction)
myfunction(names, score)

console.log(`Hello my name is ${names} and my score is ${score}`)

console.log(names.length)
console.log(names[0])
console.log(names.toUpperCase())
console.log(names.toLowerCase())
console.log(myname.split(' '))
console.log(myname.trim())
console.log(myname.replace('Yash', 'Raj'))
console.log(myname.includes('Yash'))
console.log(myname.startsWith('Y'))
console.log(myname.endsWith('sh'))
console.log(myname.charAt(0))
console.log(myname.charCodeAt(0))
console.log(myname.indexOf('a'))
console.log(myname.lastIndexOf('a'))


// starting index and characters up to
console.log(myname.slice(0, 3))
console.log(myname.substring(0, 3))  // doesn't take negative values
