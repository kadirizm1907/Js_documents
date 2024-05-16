console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const htmlLi = document.querySelector(".item-list ul li:nth-child(2)")
console.log(htmlLi.parentNode.parentNode.parentNode.parentElement); //? body
console.log(htmlLi.parentElement); //? ul

//? closest() metodu root yonundeki uygun olan parent'i secer
console.log(htmlLi.closest("section")) //? en yakın section parent'ı bulur -----section.item-list

console.log(htmlLi.closest("main").querySelector("#btn")) //? en yakın main'i bul icersindeki btn id'li elementi sec ---<input id="btn" type="button" value="ADD">

// //* 2- Asagi Yonde traverse
// //*----------------------------------------------
//? Children, firstElementChild, lastElementChild
console.log(htmlLi.firstElementChild) //? Null
console.log(htmlLi.firstChild) //? CSS
console.log(htmlLi.lastChild) //? CSS
const HtmlUl = document.querySelector(".item-list ul")
console.log(HtmlUl.firstElementChild); //? HTML
console.log(HtmlUl.firstChild); //? TEXT

const itemList = document.querySelector(".item-list")
console.log(itemList.firstElementChild) //?h3
console.log(itemList.lastElementChild) //? ul

console.log(itemList.lastElementChild.firstElementChild) //? HTML li
console.log(itemList.lastElementChild.lastElementChild) //? Django li

// //* 3- Yatay Yonde traverse
// //*----------------------------------------------
// //! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerText)//? Javascript
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText)//? React
console.log(
  htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText
)//? Javascript
