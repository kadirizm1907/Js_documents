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
myPar.type = "button"
myPar.name = "par"



//? yontem-2 (setAttribute)

myPar.setAttribute("id", "deneme")
myPar.setAttribute("class", "bg-danger border border-primary border-3")



//? yontem-3 (classList)

myPar.classList.add("text-center")
myPar.classList.contains("bg-danger")
if(myPar.classList.contains("bg-danger")){
    myPar.classList.remove("bg-danger")
    myPar.classList.add("bg-warning")
}