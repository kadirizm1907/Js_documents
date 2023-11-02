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

myPar.classList.toggle("text-danger")
//? toggle a yazilan deger varsa onu kaldirir. eger o deger yoksa o degeri ekler (class icine)

//* ---------- Yeni element ekleme (innerHTML) yontemi

const ul = document.querySelector("ul")
ul.innerHTML += ` 
<li id='deneme'> c++</li>
<li class='fw-bold'>JAVA</li>
<li> RUBY</li>
<li> ASMBLY</li>
`
// ul.innerHTML += "<li> c++</li><li>JAVA</li><li> RUBY</li><li> ASMBLY</li>" //? CIFT TIRNAK ILE DE YAPILABILIR
//? += YAPARSAK OLAN ELEMENLERIN ALTINA EKLER
//? = DERSEK ESKI ELEMENTLERI SILER UZERNE YAZILA DEGERLERI EKLER



const section3 = document.createElement("section")
document.querySelector("main").appendChild(section3)

section3.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`