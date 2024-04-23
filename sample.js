

// const sayi = Number(prompt("Bir sayi giriniz"))
// if (sayi < 0) {
//     console.log(`${sayi} negatiftir`);
// } else if (sayi > 0) {
//     console.log(`${sayi} positiftir `);
// } else if (sayi === 0) {
//     console.log(`${sayi} sifirdir`);
// } else {
// console.log("Girdiginiz deger bir sayi degildir");
// }

// let n1 = Number(prompt("Ilk sayiyi giriniz"))
// let n2 = Number(prompt("Ikinci sayiyi giriniz"))
// let n3 = Number(prompt("Ucuncu sayiyi giriniz"))

// if (n1 >= n2) {
//     if (n1 >= n3) {
//         console.log(n1, "en buyuk sayidir");
//     }
// }
// if (n2 >= n1) {
//     if (n2 >= n3) {
//         console.log(n2, "en buyuk sayidir");
//     }

// }
// if (n3 >= n1) {
//     if (n3 >= n2) {
//         console.log(n3, "en buyuk sayidir");
//     }
// }
//**************** TERNARY *******************
const note = 60
const result = note >= 50 ? "passed" : "failed"
console.log("result", result);

let numOfPassedStudents = 0
let numOfFailedStudents = 0
note >= 150 ? (numOfPassedStudents = + 1) : numOfFailedStudents++
console.log({ numOfFailedStudents });
console.log({ numOfPassedStudents });


//? Nested ternary (birden fazla kosul varsa - if-elseif-else)

const speed = 90
const warning = speed >= 120 ? "You drive over the speed limit" : speed >= 90 ? "Your speed is awerage" : "You are driving slow";
console.log(warning);

//? Tek kosullu ternary - if()

const workingYear = 17
let salary = 35000
workingYear >= 5 ? (salary *= 1.1) : "";
console.log(salary);

workingYear >= 5 && (salary *= 1.1)
console.log(salary);
workingYear >= 5 || (salary *= 1.1)
console.log(salary);

//**************** SWITCH-CASE *******************

const day = Number(prompt("Enter a number"))
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log((day > 7 || day < 1) ? "Enter a number between 1-7" :"Weekends")
        break;
}