/********************** #1.  trim()  **********************/

let myFullName = '   Ram   '

console.log(myFullName); // output is   Ram      (having white spaces)

let myFullNameTrimmed = myFullName.trim()

console.log(myFullNameTrimmed); // output is Ram  (no white space, before and after)

// trim() function removes all the starting and ending white spaces.  Note:- not middle white spaces

/********************** #2. toUpperCase()  **********************/

console.log('Ram'.toUpperCase()) // toUpperCase funtion converts all the charcters(alphabetic) into upper cases

// Output is RAM

/**********************  #3. toLowerCase()  **********************/

console.log('Ram'.toLowerCase()) // toLowerCase funtion converts all the charcters(alphabetic) into lower cases

// Output is ram

/**********************  #4. split()  **********************/

//this function will split a string into substring using a specified separator and a limit.

// Syntax

// console.log(string.split(seperator, limit));

/***************** #5. *****************/
let myName01 = 'Ram,Sharma,'
console.log(myName01.split((","), 2)) // find , and split into 2
//Output is "Ram", "Sharma"

/***************** #6. *****************/
let myName02 = 'Ram Sharma,'
console.log(myName02.split((","), 2)) // find , and split into 2
//Output is "Ram Sharma", ""

/***************** #7. *****************/
let myName03 = 'Ram,Sharma'
console.log(myName03.split((","), 90)) // find , and split into 90
//Output is "Ram", "Sharma"

/***************** #8. *****************/
let myName04 = 'RamSharma'
console.log(myName04.split((""))) // here spliting occurs till the end of the string
//Output is "r", "a", "m", "s", "h", "a", "r", "m", "a"

/*******************#9. *****************/
//used to check the number of chacters in a string, Note:- space is also counted

console.log('Ram Sharma'.length)

//output is 12

console.log('RamSharma'.length)

//output is 11


/********************#10.  *****************/
// It is used to replace something in a string

// Syntax

// let variableName = 'variableValue'
// let newVariableName = variableName.replace(searchValue, replaceValue)


/********************#11. ******************/
let myName = 'Ram Sharma'
let updatedMyName = myName.replace(" ", ",")
console.log(updatedMyName)
//Output is Ram,Sharma


/*********************#12. *****************/

let didiName = 'Priya Sharma'
let updatedDidiName = didiName.replace("Ram", "Priya")
console.log(updatedDidiName)
//Output is Priya Sharma

