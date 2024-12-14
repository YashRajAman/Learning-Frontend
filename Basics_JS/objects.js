myfun()



const userObj = {
    name : "yash",
    mykey : "some key",
    hobbies : {
        "reading" : "books",
        "coding" : "javascript"
    
    },
    skills : ["cpp", "java", "python", "javascript"],
    greetings: function(){
        console.log(`Hi I am ${this.name} and my skills are [${this.skills}]`);
    }
    
    
}

// console.log(userObj)
// console.log(userObj.greetings())

const mySym = Symbol("myId")

const userObjId = {
    name : "yash",
    [mySym] : "some value",
    mykey : "some key",
    hobbies : {
        "reading" : "books",
        "coding" : "javascript"
    
    },
    skills : ["cpp", "java", "python", "javascript"]
    
}

// console.log(userObjId)


/*
--OUTPUTS

{
  name: 'yash',
  mykey: 'some key',
  hobbies: { reading: 'books', coding: 'javascript' },
  skills: [ 'cpp', 'java', 'python', 'javascript' ]
}
{
  name: 'yash',
  mykey: 'some key',
  hobbies: { reading: 'books', coding: 'javascript' },
  skills: [ 'cpp', 'java', 'python', 'javascript' ],
  [Symbol(myId)]: 'some value'
}


*/

//object listified
Object.keys(userObj)
Object.values(userObj)
Object.entries(userObj)


const anotherObj = Object.create

anotherObj["name"] = "Yash"
anotherObj["name"] = "Yash"

// console.log(anotherObj.name)

// deconstruction of object


const user = {
    name : "yash",
    [mySym] : "some value",
    mykey : "some key",
    hobbies : {
        "reading" : "books",
        "coding" : "javascript"
    
    },
    skills : ["cpp", "java", "python", "javascript"]
    
}
// taking attribute outside of object
const {name} = user

console.log(name)

// redifining the attribute 
const {name: myName} = user

console.log(myName)





/* hoisting

    it takes all the declarations to the top of current scope
    var -> undefined 
    let/const/class/.. -> can't access but not undefined
    function -> if declared without variable referencing, then fully hoisted



*/
console.log(justavar)


let justavar = "yash raj aman"



function myfun(){
    console.log("cha baju hat.")
}