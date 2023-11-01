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

const html = document.querySelector("ul li:nth-child(1)")
console.log(html.parentNode.parentNode.parentNode) //?  main (3 basamak yukari cikti)
console.log(html.parentElement.parentElement.parentElement) //?  main (3 basamak yukari cikti)

console.log(html.closest("section")) //? en yakin section parent i bulur
console.log(html.closest("main").querySelector("#add-new-item")) //? en yakin main i bul icerisindeki id si add-new-item olan elementi sec



console.log(html.firstElementChild) /// null
console.log(html.firstChild) /// html
console.log(html.lastChild) //? html 


const itemList = document.querySelector(".item-list")
console.log(itemList.firstElementChild)  //? h3
console.log(itemList.lastElementChild) //? ul

console.log(itemList.lastElementChild.firstElementChild) //? html li
console.log(itemList.lastElementChild.lastElementChild) //? Django li



console.log(html.nextElementSibling.innerHTML)
console.log(html.nextElementSibling.nextElementSibling.innerHTML)
console.log(html.nextElementSibling.nextElementSibling.previousElementSibling.innerHTML)