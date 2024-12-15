
/* if (condition){
    body;
    }

    if (true){
    console.log("Condition is true");
    }
    else if (flase){
        console.log("Condition is false");
    }


*/



// if (2==2){
//     console.log(2==2);
// }

// if (2 == "2"){
//     console.log(2 == "2");
// }

// if (!(2 === '2')){
//     console.log(2 === '2');
// }

// if (2 === 2){
//     console.log(2 === 2);
// }

const key = 'e'

switch(key){
    case 'a':
        console.log('a')
        break;
    case 'b':
        console.log('b')
        break;
    default:
        console.log('default')
        break;

}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Nullish coalescing Operator 
// ?? 
// if (a ?? b) {
//     console.log(a);
// } else {
//     console.log(b);
// }
// 
// it will take the first value if not null or undefined

let value1;

let value2 = value1 ?? 'default';

console.log(value2);

value2 = null ?? 10
console.log(value2);

value2 = undefined ?? 15
console.log(value2);


// ternary operator

(value1 > value2)? console.log(value1):console.log(value2)
