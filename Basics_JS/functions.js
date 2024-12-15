
function sumit(x, y){
    return x+y
}

// console.log("Add of 3 and 7 is "+sumit(3,7))

function sayHi(name="Unknown"){   // default param
    console.log(`Hello, ${name}`)
}

// sayHi()

// sayHi("Yash")


const slip = {
    price: 100,
    rate: 2
}

function increaseRateBy2folds(obj){

    if (Object.keys(obj).includes('rate')){

        obj.rate = obj.rate * 2
        return obj
    }
    else{
        return undefined
    }
}

// console.log(increaseRateBy2folds(slip))

// inner function 
// console.log("=========================================================")
function first(){
    const username = "Aman"

    function second(){
        const password = "Yethinknahihorahahai"
        console.log(`${username} , ${password}`)
    }

    // console.log(password) // throws error
    second()

}

// first()


/* 'this' is a global object which denotes the global namespace or object namespace in code environment.
    'Window' is this alternative for browser env
    
    
*/

// arrow function

const abc = (x, y) => {
    return x+y   // explicit return
}

const bca = (x,y) => x+y //implicit return

// immediately executed function expression IEFE
// a semicolon is required to init the context and end the context

;  // if this is removed then my Funbegins1 will not be executed and myFunbegins2 will be executed
(function myFunbegins1() {
    console.log("Nikal yaha se......");
})();




(function myFunbegins2(){
    console.log("Nikal yaha se.")
})();   // semocolon is required to end the contex, else will throw error on next instruction


// (() => {
//     console.log("Hello arrows")
// })();  // // semocolon is required to end the contex, else will throw error on next instruction 

// ((name) => {
//     console.log(`Hello ${name}`)
// })('Shyam')


