// dataStyle and timeStyle for Intl.DateTimeFormat
// dataStyle: 'full', 'long', 'medium', 'short', or 'numeric
// timeStyle: 'full', 'long', 'medium', 'short', or 'numeric'

// const date = new Date();
// console.log(date);

// const options = {
//   dateStyle: 'short',
//   timeStyle: 'medium',
// };

// const formattedDateTime = new Intl.DateTimeFormat(undefined, options).format(date);
// console.log(formattedDateTime); // Output (Example):24.07.23, 23:00:34

// const date = new Date();

// const options = {
//   dateStyle: 'long',
//   timeStyle: 'medium',
// };

// const formattedDateTime = new Intl.DateTimeFormat(undefined, options).format(date);
// console.log(formattedDateTime); // Output (Example): July 19, 2023, 1:30:45 PM


// const date = new Date();

// const options = {
//   dateStyle: 'full',
//   timeStyle: 'short',
// };

// const locale = 'de-DE';

// const formattedDateTime = new Intl.DateTimeFormat(locale, options).format(date);
// console.log(formattedDateTime); // Output (Example): Dienstag, 19. Juli 2023, 13:30



// Intl.ListFormat
// style: long, short, narrow
// type: conjunction, disjunction, unit

// const listItems = ['Apples', 'Bananas', 'Cherries'];
// const listFormat = new Intl.ListFormat('en');
// const formattedList = listFormat.format(listItems);
// console.log(formattedList); // Output: "Apples, Bananas, and Cherries"

// const listItems = ['Apple', 'Banana', 'Cherry', 'Date'];
// const listFormat = new Intl.ListFormat('en', { style: 'long', type: 'disjunction' });
// const formattedList = listFormat.format(listItems);
// console.log(formattedList); // Output: "Apple, Banana, Cherry, or Date"

// const listItems = ['Red', 'Green', 'Blue'];
// const listFormat = new Intl.ListFormat('fr', { style: 'short', type: 'unit' });
// const formattedList = listFormat.format(listItems);
// console.log(formattedList); // Output: "Red, Green et Blue"

// const listItems = ['Apples', 'Bananas', 'Cherries'];
// const listFormatNarrow = new Intl.ListFormat('en', { style: 'narrow' });
// const formattedListNarrow = listFormatNarrow.format(listItems);
// console.log(formattedListNarrow); // Output: "Apples, Bananas, Cherries"



// method "at()" in the arrays

// const arr = [1,2,3,4];

// OLD SOLUTION
// arr[arr.length - 2] // 3
// arr.slice(-2)[0]    // 3

// const str = "1234"
// str[str.length - 2] // '3'
// str.slice(-2)[0]    // '3'

// NOW WE CAN
// const arr = [1,2,3,4]
// arr.at(-2) // 3

// const str = "1234"
// str.at(-2) // '3'



// Error cause
// const url = ' https://api.github.com/users';
// const apiFetch = async (path) => {
//   await fetch(`${url}/${path}`);
// };

// OLD SOLUTION
// try {
//   await apiFetch('bar');
// } catch (apiError) {
//   throw new Error(
//     "An error has occured while trying to fetch bar : " + apiError
//   );
// }

// NOW WE CAN
// const main = async () => {
//   try {
//     await apiFetch('trttstrst');
//   } catch (error) {
//     throw new Error("An error has occured while trying to fetch foo", {
//       cause: error,
//     });
//   }
// };

// main();


// "await" without function

// const serviceName = await fetch("https://example.com/what-service-should-i-use");
// const service = await import(`/services/${serviceName}.js`);

// const params = new URLSearchParams(location.search);
// const theme = params.get('theme');
// const stylingFunctions = await import(`/styling-functions-${theme}.js`);


// Private fields and methods
// class Human {
//   #name = "John";
  
//   setName(name) {
//     this.#name = name;
//   }
// }

// const human = new Human()
// human.#name = 'Amy'  // ERROR!
// human.setName('Amy') // ОК

// class Human {
//   name = "John";
  
//   constructor(name) {
//     this.#setName('Amy') // OK
//   }
  
//   #setName(name) {
//     this.name = name;
//   }
// }

// const human = new Human()
// human.#setName('Amy') // ERROR!


// Promise.any

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(reject, 200, 'Third')),
//   new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Second')),
//   new Promise((resolve, reject) => setTimeout(resolve, 2000, 'First')),
// ])
//   .then(value => console.log(`Result: ${value}`))
//   .catch (err => console.log(err));

// Promise.any([
//   Promise.reject('Error 1'),
//   Promise.reject('Error 2'),
//   Promise.reject('Error 3')
// ])
//   .then(value => console.log(`Result: ${value}`))
//   .catch (err => console.log(err)); // AggregateError: All promises were rejected


// Number separators (_)

// const number = 100_000_000;
// console.log(number); // 100000


// opertor ??
// undefied || null

// let num1;
// let num2 = 10;

// num1 ??= num2;
// console.log(num1); // 10

// let num1 = 0;
// let num2 = 10;

// num1 ??= num2;
// console.log(num1); // 0


// &&= or ||=

// let x = 5;
// let y = 10;
// x &&= y;
// console.log(x); // Output: 10
// Update y only if x is truthy (not 0, null, undefined, false, or empty string)

// let a = 0;
// let b = 20;
// a &&= b;
// console.log(a); // Output: 0
// // Update b only if a is truthy (not 0, null, undefined, false, or empty string)



// let x = 0;
// let y = 15;
// x ||= y;
// console.log(x); // Output: 15
// // Update x only if x is falsy (0, null, undefined, false, or empty string)

// let a = 'hello';
// let b = 'world';
// a ||= b;
// console.log(a); // Output: "hello"
// // Update a only if a is falsy (0, null, undefined, false, or empty string)


