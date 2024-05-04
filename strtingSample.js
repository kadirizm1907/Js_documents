//?String methods

let name1 = "kadir yurtsever"
for(let i = 0; i < name1.length; i++) {
    console.log(name1[i]);
}
console.log(name1);
console.clear()
///* string birlestirme methodlari [+ ile, concat() ile ve template literal ile birlestirme]

let name2 = "kadir"
let surName = "yurtsever"
console.log(name2 +" "+surName); //?kadir yurtsever

console.log(name2.concat(surName)); //? kadiryurtsever

const fullName = `My name is ${name2} ${surName} `
console.log(fullName); //?My name is kadir yurtsever 


// *  join ve reverse
//* join  ve reverse Array metodur. ama stringlerde cokca kullaniriz.


let sentence = "Ali ata bak"
console.log(sentence.split(" ").join(" ").toUpperCase()); //?ALI ATA BAK

console.log(sentence.split(" ").reverse().join(" ")); //? bak ata Ali
console.log(sentence.split("").reverse().join(" ")) //? k a b   a t a   i l A


//* string parcalama methodlari
//* slice , Substring, Substr



