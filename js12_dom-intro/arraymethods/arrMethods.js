//!Array length----
//The length property returns the length (size) of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)//?4 ogesi var

//!Array toString()----
//The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.toString()) //? Banana,Orange,Apple,Mango

//!Array join() 
//The join() method also joins all array elements into a string.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.join(" * ")) //?Banana * Orange * Apple * Mango


//!Array pop()-----
//Popping items out of an array, The pop() method removes the last element from an array:

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4)//? ['Banana', 'Orange', 'Apple', 'Mango']
fruits4.pop();
console.log(fruits4)//?['Banana', 'Orange', 'Apple']


//!Array push()
//pushing items into an array.The push() method adds a new element to an array (at the end):

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5)//?['Banana', 'Orange', 'Apple', 'Mango']

fruits5.push("Kiwi")
console.log(fruits5)//?['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']



//!Array shift()
//The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6)//?["Banana", "Orange", "Apple", "Mango"]

fruits6.shift();
console.log(fruits6)//? ['Orange', 'Apple', 'Mango']


//!Array unshift()
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7)//? ["Banana", "Orange", "Apple", "Mango"]

fruits7.unshift("Avakado")
console.log(fruits7)//? ['Avakado', 'Banana', 'Orange', 'Apple', 'Mango']



//!Array delete()

//!              ----------------------------Warning ------------------------               Array elements can be deleted using the JavaScript operator delete. Using delete leaves defined holes in the array. Use pop() or shift() instead.

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8);//? ['Banana', 'Orange', 'Apple', 'Mango']

delete fruits8[0];
console.log(fruits8)//? [empty, 'Orange', 'Apple', 'Mango']


//!Array concat()
//The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)//?['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']


//?concat icine istedigin kadar argumen koyabilirsin.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1)//?['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']


//!Array flat()
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)//? [1, 2, 3, 4, 5, 6]



//!Array splice()
//The splice() method can be used to add new items to an array:
//1-The first parameter (2) defines the position where new elements should be added (spliced in).
//2-The second parameter (0) defines how many elements should be removed.

//3- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9)//?['Banana', 'Orange', 'Apple', 'Mango']
fruits9.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits9)//?['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']


const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits10)//? ['Banana', 'Lemon', 'Kiwi', 'Mango']



//!Array slice()
//The slice() method slices out a piece of an array into a new array.

const fruits11 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits11.slice(1); //? 1.elementten sonra basliyor'banana'dan sonrasini alir
console.log(fruits11)//? ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus)//? ['Orange', 'Lemon', 'Apple', 'Mango']


const fruits12 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits11.slice(3); //? 3.elementten sonra basliyor 'lemon' dan sonrasini alir
console.log(fruits12)//? ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus1)//? ['Apple', 'Mango']