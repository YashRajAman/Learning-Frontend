// arrays

const arr = [1,23,3,4,423,2,3, "This is fun but not so much"]
const shl = [1,2,3,4,5]
// console.log(arr.length)
// console.log(arr[arr.length-1])
//const concated_arr = arr.concat(shl)

// const concated_arr = [...arr, ...shl]

console.log(Array.isArray(arr))
console.log(Array.from('YashRaj'))  //return empty array if unable to create an array

shl.unshift()
console.log(shl)

shl.shift()
console.log(shl)

shl.shift()
console.log(shl)

console.log(shl, shl.slice(0, 3), shl)
console.log(shl, shl.splice(0, 2), shl)

const myDict = {1:2, 3:5}
console.log(myDict)

