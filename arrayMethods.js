// Create a detailed note and try out at least one example for each of these array methods (create one JS file named arrayMethods)


// 1. concat()
// It concatenates two or more arrays, returns a new array containing the joined arrays.

// example 
const A = ['a','b','c','d']
const B = ['A','B','C','D']
console.log(A.concat(B));

//--------------------------------------------------------------------------------------------//

//2. every()
// executes a function for each array element.
// returns true if the function returns true for all elements.
// returns false if the function returns false for one element.

// example 
const num12 = [10,30,20,50,40]
const every = num12.every((item) => {
    return item > 30;
})
console.log(every);

//--------------------------------------------------------------------------------------------//

//3. fill()
// fills specified elements in an array with a value.
// this overwrites the original array.

// example
const animals = ['lion','bear','monkey']
animals.fill('fox',2)

//--------------------------------------------------------------------------------------------//

//4. find()
// returns the value of the first element in the array that satisfies the provided function's test.

// example
const num22 = [4,5,8,12,15,20,24]
const num23 = num22.find((num22)=>{
    return num22>10
})
console.log(num23);

//--------------------------------------------------------------------------------------------//

//5. findIndex()
// finds the index of the first element that passes a test

// example
const num24 = [10,20,25,30,35]
const num25 =num24.findIndex((num24)=>{
    return num24>30
})
console.log(num25);

//--------------------------------------------------------------------------------------------//

//6. flat()
// It concatenates the subarray elements.

// example 
const myArr= [[1,2],[3,4]]
console.log(myArr.flat());

//---------------------------------------------------------------------------------------------//

//7. includes()
// checks if an array contains a specified elements. 

//example 1
const nums = [4,1,2,8,2,8,6]
console.log(nums.includes(2));

//example 2
const num = [4,1,2,8,2,8,6]
console.log(num.includes(80));

//--------------------------------------------------------------------------------------------//

//8. indexOf()
// searches an element of an array and returns its position.

//example 1
const num1 = [4,1,2,8,2,8,6]
console.log(num1.indexOf(8));

//example 2
const num11 = [4,1,2,8,2,8,6]
console.log(num11.indexOf(40));

//---------------------------------------------------------------------------------------------//

//9. join()
// adds all the elements of an array into a string seperated by the specified separator string.

// example
const num14  = [1,2,3,4,5]
const arr15 = arr34.join()
console.log(arr15);

//---------------------------------------------------------------------------------------------//

//10. lastIndexOf()
// finds the index of the last element with a specified value.

// example 
const num10 = [1,2,8,4,8,6]
console.log(num10.lastIndexOf(8));

//----------------------------------------------------------------------------------------------//

//11. pop()
// removes the last element of an array and returns the removed element.

//example
const num4 = [4,1,2,8,2,8,6]
num4.pop()
console.log(num4);

//----------------------------------------------------------------------------------------------//

//12. push()
// adds a new element to the end of an array and returns the new length of an array.

//example 
const num2 = [4,1,2,8,2,8,6]
num2.push("zenab")
console.log(num2);

//-----------------------------------------------------------------------------------------------//

//13. Reverse()
// reverses the order of the elements in an array.

//example
const num9 = [0,1,2,3,4,5]
console.log(num9.reverse());

//------------------------------------------------------------------------------------------------//

//14. unshift()
// adds a new element to the begining of an array and returns the new length of an array.

//example 
const num3 = [4,1,2,8,2,8,6]
num3.push("zenab")
console.log(num3);

//------------------------------------------------------------------------------------------------//

//15. shift()
// removes the first element of an array and returns the removed array.

//example
const num5 = [4,1,2,8,2,8,6]
num5.shift()
console.log(num5);

//------------------------------------------------------------------------------------------------//

//16. slice()
// selects the part of an array and returns the new array.

//example
const num7 = [4,1,2,8,2,8,6]
const subArray = num7.slice(2,5)
console.log(subArray);

//-----------------------------------------------------------------------------------------------//

//17. Some()
// checks if any array elements pass a test.
// executes the callback function once for each array element.
// returns true and stops if the function returns true for one of the array.
// returns false if the function returns false for all of array elements.

// example 
const counts = [10,30,20,50,40]
const some = counts.some((item, index) => {
    console.log(index);
    return item > 20;
})
console.log(some);

//------------------------------------------------------------------------------------------------//

//18. sort()
// sorts the elements alphabetically in strings and in ascending order.

// example
const num6 = [4,1,2,8,2,8,6]
num6.sort()
console.log(num6);

//-------------------------------------------------------------------------------------------------//

//19. splice()
// adds or removes array elements.
// overwrites the original array.

//example
const num8 = [0,1,2,3,4,5]
num8.splice(7,8,9)
console.log(num8);

//-------------------------------------------------------------------------------------------------//

//20. toString()
// returns a string with array values seperated by commas and does not change original array.

//example
const fruits = ["banana","apple","mango"]
const newString = fruits.toString();
console.log(newString);

//--------------------------------------------------------------------------------------------------//

//21. Filter()
// creates a new array filled with elements that pass a test provided by a function.

// example
const ages = [32,33,16,40]
const result = ages.filter(checkAdult)
function checkAdult(age){
    return age >= 18;
}

//---------------------------------------------------------------------------------------------------//

//22. Reduce()
// executes a reducer function that you provide on each element of the array, resulting in a single output value.

// example
const num17 = [2,4,6,8,10,12,14,16,18,20]
const sumOfnum17 = num17.reduce((acc,num)=>{
    return acc+num
})
console.log(sumOfnum17);

//-----------------------------------------------------------------------------------------------------//

//23. Map()
// creates a new array with the results of calling a provided function on every element in the calling array.

// example 
const num18 = [2,4,6,8,10,12,14,16,18,20]
const num19 = num18.map((element)=>{
    return element*5
})
console.log(num19);

//--------------------------------------------------------------------------------------------------------//

//24. forEach()
// executes a provided function once for each array element.

// example
const num20 = [1,2,3,4,5,6,7,8,9,10]
const num21 = num20.forEach((number)=>{
    console.log(number);
})
