//!  map()
let numbers = [1, 2, 3];
let tripleNumber = numbers.map((e) => e * 3)
console.log(tripleNumber)//?  [3, 6, 9]

let fahrTemp = [32, 68, 100, 69, 300]
function fahtocal(fah) {
    return (fah - 32) * (5 / 9);
}
let celTemp = fahrTemp.map(a => {
    (a - 32) * (5 / 9);
    return a.toFixed(1)
});
console.log(celTemp)//?  ['32.0', '68.0', '100.0', '69.0', '300.0']

//!Filter()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum)//?[2, 4, 6, 8, 10]

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = num1.filter((e) => e % 2 === 1);
console.log(oddNum)//?[1, 3, 5, 7, 9]

let employe = [
    { name: "aaaa", age: 25, gender: "female" },
    { name: "bbbb", age: 35, gender: "male" },
    { name: "cccc", age: 105, gender: "female" },
    { name: "dddd", age: 45, gender: "male" },
    { name: "ffff", age: 15, gender: "female" },
    { name: "eeee", age: 65, gender: "male" },
];
let empMale30 = employe.filter((k) => {
    return k.gender === "male" && k.age > 30
})
console.log(empMale30)//?name: "bbbb", age: 35, gender: "male" 
//? name: "eeee", age: 65, gender: "male" //?  name: "bbbb", age: 35, gender: "male"

//! reduce()

let numb = [1, 2, 3, 4, 5];
let addnumb = numb.reduce((acc, num) => acc + num, 0)
console.log(addnumb) //? 15
let multiNumb = numb.reduce((acc, num) => acc * num, 1)//? 0 ile baslarsan tum degeri 0 yapar
console.log(multiNumb)//? 120


let top1 = [10, 25, 7, 90, 55];
let numMax = top1.reduce((max, num) => {
    if(num > max){
        return num;
    }else {
        return max;
    }
}, top1[0] )
console.log(numMax) //? 90


let cardItems = [
   { name: "jeans", price: 325},
   { name: "Shirts", price: 100},
   { name: "shoes", price: 225},
   { name: "hat", price: 25},
   { name: "t-shirts", price: 125},
];
let totalCard = cardItems.reduce((total, item) =>  total + item.price, 0)
console.log(totalCard) //? 800
let totalCard1 = cardItems.reduce((total, item) =>  total + item.name, 0)
console.log(totalCard1)//? 0jeansShirtsshoeshatt-shirts 

//!rest yazilan tum degerleri toplayarak ekler
function concatenate(...args){
    let name = ''
    for (let arg of args) name += ' ' + arg;
    return name
   }
   console.log(concatenate('Raymond', 'Red', 'Reddington'))
   // Prints 'Raymond Red Reddington'
   console.log(concatenate('kadir', "tugbanur"))

   //! spread ise atanan dgerleri yayarak ekler

let a = [1, 2, 3]
let b = [4, 5]
let mergedArray = [...a, ...b] 
console.log(mergedArray) //?[1, 2, 3, 4, 5]


