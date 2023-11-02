console.log("**** CREATE NODE ****")

//* ------- YENI BIR ELEMENT OLUSTURMA ------

//? 1- yeni element olustur
const myPar = document.createElement("p")
//? 2- Eger text tabanli ise text dugumu olustur
const text = document.createTextNode("P elementi")
//? 3- olusturulan text dugumunu yeni elemente bagla(append)
myPar.appendChild(text)
//? 4- yeni olusan elementi DOM agacina ekle
const addItemsection = document.querySelector(".add-item")
addItemsection.appendChild(myPar)



addItemsection.before(myPar)

///??? react elemnetinin altina ekle
const reactLi = document.querySelector("ul li:nth-child(4)")
reactLi.after(myPar)

//* -------- ID, CLASS gibi ozellikler atama----

//? yontem-1

myPar.id = "paragraf" //? id atandi
myPar.className = "red" //? class atandi
