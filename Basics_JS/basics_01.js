const accountId=12345  // const can't be reassigned afterwards, and must be initialized at declaration
let username = "Yash Raj"
var pass = "chal be baaju hat" /* var not to be used any further because of scope issue*/ //funtional scopre
city = "Jaipur"

/*
var -> no reference error but value will be undefined even before assignement

> console.log(d); var d = 5;
undefined
undefined
> d
5
> 


let and const -> gives reference error if accessed before assignement

> console.log(f); let f = 5;
Uncaught ReferenceError: Cannot access 'f' before initialization

*/



console.log(username)

console.table([accountId, username, pass, city])

/*
DATA TYPES IN JS

String
number
boolean
undefined
null
object
symbol
bigint
*/

// string concatenation

let st1 = "Yash "
let st2 = "Raj"

console.log(st1 + st2)

///// comparisons //////
/* true/false or truthy or flasy */


