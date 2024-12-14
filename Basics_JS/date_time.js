// Dates

let myDate = new Date() //current time and date

console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.getTime())   
 

/*
--OUTPUTS

Wed Nov 20 2024 09:34:37 GMT+0530 (India Standard Time)
date_time.js:5
20/11/2024
date_time.js:6
20/11/2024, 9:34:37 am
date_time.js:7
2024-11-20T04:04:37.952Z
date_time.js:8
Wed, 20 Nov 2024 04:04:37 GMT
date_time.js:9
9:34:37 am
date_time.js:10
1732075477952

*/