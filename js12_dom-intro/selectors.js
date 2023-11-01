console.log("***** SELECTORS Method *****")
document.title = "FS!5 💥☪"
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const header = document.getElementById("header")
console.log(header)

// ///? DOM bir obje modelidir key = value
// /? atribute isimleri => camelCase

// header.style.color = "white"     //? yontem-1 
// header.style.backgroundColor = "green"
header.style = "background-color:blue; color:yellow; font-familt:Tahoma" //? yontem-2



const h2 = document.getElementById("add-new-item")
console.log(h2)


//* Text elemaninin icerigini okuma

console.log(h2.textContent)
console.log(h2.innerText)
console.log(h2.innerHTML)

//* Text elemanini icerigini degistirme

h2.textContent = " ADD" //? ADD
h2.innerText = " ADD MORE" //? ADD MORE
h2.innerHTML = "<p>ADD<p/>" //? ADD "guvenlik acigina sepep oldugundan cok kullanmamak lazim"
// h2.innerText = "<p>ADD<p/>" //? <p>ADD<p/>


document.getElementById("btn").value = "submit"

const input = document.getElementById("input")
input.value = "JAVA Scrip"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================


const lists = document.getElementsByTagName("li")
console.log(lists) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
//! HTMLCOLLECTION DOM un sundugu bir veri yapisidir. array a benzer

console.log("size:", lists.length) //? size: 5

//? FOR donguleri ile iteri edilebilir
for (let li of lists){
    console.log(li)
    
}
for (let li of lists){
    
    console.log(li.textContent)
    
}
for (let li of lists){
    
    console.log(li.innerText)
}

//? HTML collection olan yapiyi array a cevirmek (spread ile)

const listArray = [...lists]; //? array e cevrildi
listArray.forEach((li) => (li.style.color = "green")) //? yontem -1

//? HTML collection olan yapiyi array a cevirmek(array ile)
Array.from(lists).map((li) => (li.style.backgroundColor = "lightgrey")) //? yontem-2


//? ornek

const sections = document.getElementsByTagName("section")
console.log(sections ) //? HTMLCollection(2) [section.add-item, section.item-list]

sections[0].style.backgroundColor = "blue"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList) //? HTMLCollection(2) [section.add-item, section.item-list]
console.log(myList[0].innerText) 
console.log(myList[2].innerText) 
console.log(myList[3].innerText) 


//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//! Query sellector ile id, tag, class secilebilir.
//! bu secici akista gordugu ilk elementi secer


//? id almak (#)

console.log(document.querySelector("#header"))

//? class almak (.)
console.log(document.querySelector(".item-list"))

//? tag alamak icin onune birsey konmaz()
console.log(document.querySelector("h3"))

console.log(document.querySelector("section.add-item #btn")) //? ic ice olan elementlerin icindekileri secebiliriz (multiple)
console.log(document.querySelector("ul li:nth-child(4)").innerText)

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const itemList = document.querySelectorAll("section.item-list li")
console.log(itemList) //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]


itemList.forEach((li) => console.log(li))

console.log("********************************")

for (let li of itemList.values()){
    console.log(li)
}

