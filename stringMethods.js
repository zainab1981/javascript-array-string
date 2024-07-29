// 2.Create a detailed note and try out at least one example for each of these string methods (create one JS file named stringMethods)


// 1. concat()
// it joins two or more strings.

// example
const str = 'full stack'
const str1 = 'developer'
console.log(str.concat(str1));

//------------------------------------------------------------------------------------------------------------------------//

// 2. includes()
// returns true if a string contains a specified string, otherwise it returns false

// example
const text8 = 'Ram is going to school'
console.log(text8.includes('going'));

//------------------------------------------------------------------------------------------------------------------------//

// 3. indexOf()
// returns the position of the first occurrence of a value in a string.
// returns -1 if the value is not found.

// example
const text1 = 'welcome to mern stack development'
console.log(text1.indexOf('mern'));

//------------------------------------------------------------------------------------------------------------------------//

// 4. lastIndexOf()
// returns the index (position) of the last occurrence of a specified value in a string.
// returns -1 if the value is not found.
// it searches the string from the end to the beginning.

// example
const text2 = 'welcome to mern stack development'
console.log(text2.indexOf('mern'));

//------------------------------------------------------------------------------------------------------------------------//

// 5. padEnd()
// pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 
// padding is applied from the end of the current string.

// example
const text18 = 'college'
console.log(text18.padEnd(8,'!'));

//------------------------------------------------------------------------------------------------------------------------//

// 6. padStart()
// padStart method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 
// padding is applied from the start of the current string.

// example
const text19 = 'college'
console.log(text19.padEnd(8,'!'))

//------------------------------------------------------------------------------------------------------------------------//

// 7. repeat()
// used to repeat string as a number defined 

// example
const text6 = 'mern stack developer'
console.log(text6.repeat(4));

//------------------------------------------------------------------------------------------------------------------------//

// 8. replace()
// searches a string for a value or a regular expression.
// returns a new string with the value(s) replaced.

// example
const text12= 'mern stack developer'
console.log(text12.replace('mern', 'full'));

//------------------------------------------------------------------------------------------------------------------------//

// 9. search()
// returns the index (position) of the first match.
// returns -1 if no match is found and is case sensitive

// example
const text11 = 'mern stack developer'
console.log(text11.search('stack'));

//------------------------------------------------------------------------------------------------------------------------//

// 10. slice()
// returns new string and gives extracted strings as our output.

// example
const text3 = "Don't settle for average"
console.log(text3.slice(6));

//------------------------------------------------------------------------------------------------------------------------//

// 11. split()
// splits a string into an array of substrings and returns the new array

// example
const text17 = "How are you doing today?";
const myArray = text17.split(" ");
console.log(myArray);

//------------------------------------------------------------------------------------------------------------------------//

// 12. startsWith()
// returns true if a string starts with a specified string.
// it is case sensitive

// example
const text10 = "Don't settle for average"
console.log(text10.startsWith("Don't"));

//------------------------------------------------------------------------------------------------------------------------//

// 13. substr()
// it is same as slice methods, it also returns new string and gives extracted string as our output.
// the difference is that second parameter describes the length of the extracted parts.

// example
const text5 = "Don't settle for average"
console.log(text5.substr(6));

//-----------------------------------------------------------------------------------------------------------------------//

// 14. substring()
// it is same as slice methods, it also returns new string and gives extracted string as our output.
// the difference is that start and end values are treated as 0 if number is less than 0 in substring() method

// example
const text4 = 'do or die'
console.log(text4.substring(5));

//-----------------------------------------------------------------------------------------------------------------------//

// 15. toLowerCase()
// it converts a string to lowercase letters.

// example
const text7 = "Javascript is Great Language"
console.log(text7.toLowerCase);

//-----------------------------------------------------------------------------------------------------------------------//

// 16. toUpperCase()
// it converts a string to uppercase letters.

// example
const text9 = "Javascript is Great Language"
console.log(text9.toUpperCase);

//-----------------------------------------------------------------------------------------------------------------------//

// 17. trim()
// removes whitespace from both sides of a string.
// example
const text13 = "       Hello World!        ";
console.log(text13.trim());

//-----------------------------------------------------------------------------------------------------------------------//

// 18. trimEnd (or trimRight)
// removes whitespace from the end of a string.

// example 
const text14 = "       Hello World!        ";
console.log(text14.trimEnd());

//-----------------------------------------------------------------------------------------------------------------------//

// 19. trimStart (or trimLeft)
// removes whitespace from the beginning of a string.

// example
const text15 = "       Hello World!        ";
console.log(text15.trimStart());

//-----------------------------------------------------------------------------------------------------------------------//

// 20. charAt()
// returns the character at a specified index (position) in a string.
// syntax : string.charAt(index_position);

// example
const text = 'salman'
console.log(text.charAt(2));

//------------------------------------------------------------------------------------------------------------------------//

// 21. charCodeAt()
// returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// example
const text16 = "MERN STACK";
const code = text16.charCodeAt(1);
console.log(code);