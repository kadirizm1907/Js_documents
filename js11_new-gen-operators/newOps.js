console.log("** NEW OPERATORS **")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

// const insan = {
//   kimlikNo: "1234567890",
//   adi: "Ahmet",
//   soyadi: "Can",
//   meslek: "Mimar",
//   maas: 30000,
// }

// console.log(insan.maas) //? . notasyonun
// console.log(insan["meslek"]) //? square bracket

// const mimarAdi = insan.adi
// console.log(mimarAdi)

// //?Destructure
// let { adi, soyadi, kimlikNo, maas } = insan

// console.log(kimlikNo)
// kimlikNo = "ABACD"
// console.log(kimlikNo, maas, adi, soyadi)

// insan.meslek = "Muhendis"
// console.log(insan)

//? NESTED

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
}

console.log("MAAS:", insanlar.kisi1.maas)

//? Destr.
//? 1. yontem
const { kisi1, kisi2 } = insanlar //? Leve1 dest.
console.log(kisi1)

const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1 //?Level2
const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = kisi2
console.log(kisi2Kimlik)

//?2. yontem
const {
  kisi1: { soyadi, adi },
} = insanlar //? nested destr.

console.log(soyadi)

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
]
console.log("************")

//? Klasik yontem ile
team.forEach((p) => {
  console.log("NAME:", p.name)
  console.log("SURNAME:", p.surname)
  console.log("JOB:", p["job"])
  console.log("AGE:", p["age"])
})

//? Destr
console.log("**** DEST ****")
team.forEach((person) => {
  const { name, surname, age, job } = person
  console.log("NAME:", name)
  console.log("SURNAME:", surname)
  console.log("JOB:", job)
  console.log("AGE:", age)
  console.log("------------")
})

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----
// function kisiOkuDeclaration () {
// }
//? bir fonks. nun donus degerinin obje olması ve dstr. parcalanmasi
const kisiOku = function () {
  return {
    no: "1234567890",
    isim: "Ahmet",
    soyisim: "Can",
    is: "Kasap",
    dilSayisi: 2,
  }
}

// console.log("KİSİ:", kisiOku())

//* function'un dondurdugu obje dogrudan dest. yapilabilir
let { no, isim, soyisim, dilSayisi } = kisiOku()

dilSayisi++
console.log(no, isim, dilSayisi)

//? Parameter olarak objenin ve destr. kullanimi
const data = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
}

const productPrint = (data) => {
  console.log(`${data.brand}-${data["product"]}: ${data.stock}`)
}

const productPrintDestr = (data) => {
  const { brand, product, stock } = data
  console.log(`${brand}-${product}: ${stock}`)
}

//? Alternatif destr (Havada veya Yolda)
const productPrintDestrV2 = ({ brand, product, stock }) => {
  console.log(`${brand}-${product}: ${stock}`)
}

productPrint(data)
productPrintDestr(data)
productPrintDestrV2(data)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================
const people = ["Ali", "Veli", "Can", "Canan"]

console.log(people[1])

//? Array destr. sıra önemlidir.
const [p1, p2, , p4] = people
console.log(p4)

//* ==============================================
//*  REST (...)
//* =============================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//?REST: Array
const araclar = ["ATV", "Kamyonet", "TIR", "Kamyon", "Araba"]
const [a1, a2, ...geriKalanAraclar] = araclar
console.log(geriKalanAraclar) //? ["Kamyonet", "TIR", "Kamyon"]

//?REST: Object
const veri = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
}

const { id, product, ...productStock } = veri
console.log(productStock)

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (a, b) => a + b

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.
const sumAll = (...numbers) => {
  // console.log(numbers)
  return numbers.reduce((acc, val) => acc + val)
}

console.log("SUM:", sum(2, 5, 6, 7, 8))
console.log("SUM-ALL:", sumAll(2, 5, 6, 7, 8))
console.log("SUM-ALL:", sumAll(3, 4, 5))

//* =============================================
//*  SPREAD (...)
//* =============================================
//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAracları] //!nested array
console.log(tasitlar)
console.log(tasitlar[1][2])

const tasitlarFlat = [...karaAracları, "hoverCraft", "gemi", ...ucanAraclar]
console.log(tasitlarFlat)

//?Ornek:
const slogan = "Reinvent Your self"
const sloganArray = [...slogan]
console.log(sloganArray)

//?Ornek:
//? Spread ile bir iterable(array), non-iterable'a cevirlebilir.
const sayilar = [2, 4, 5, 13, 56, 23]
console.log(Math.max(...sayilar))

const ciftler = [2, 4, 6]
const tekler = [1, 3, 5]

const yeniSayilar = ciftler //? Sig Kopyalama (Derin Kopyalama)

console.log(yeniSayilar, ciftler)
yeniSayilar.push(8)
console.log(yeniSayilar, ciftler)

//? Kopyalama Spread ile yapilirsa
const yeniArraySpread = [...ciftler]
console.log(yeniArraySpread, ciftler)

//? Spread ile yapılan kopyalamada tam olarak sig kopyalama gerceklesmez. Dolayısiyla birisindeki degisiklik digerine yansımaz.
//? ISTISNA: Eger dizide nesting (içiçe veri) varsa onlar icin sig kopyalama gibi calisir.
yeniArraySpread.push(10)
console.log(yeniArraySpread, ciftler)

//? Tamamen Deep Kopyalama icin JSON.stringfy() - JSON.parse()

//? Object copying

const firstObj = { a: 1, b: 2, c: 3 }
const secondObj = { a: 2, d: 3, c: 4 }

const copiedFirstObj = { ...firstObj }
console.log(copiedFirstObj)

copiedFirstObj.a = 44

//? nesting olmadigi icin deep copy gibi davranir.
console.log(copiedFirstObj, firstObj)

const combinedObjs = { ...firstObj, ...secondObj }
console.log(combinedObjs)

//? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}

console.log("MAAS:", sahislar.sahis1.salary)

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let s in sahislar) {
  // console.log(s)
  // console.log(sahislar[s]) //? square bracket notasyon
  console.log(sahislar[s].salary) //? square bracket notasyon
}

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(sahislar))
console.log(Object.values(sahislar))
console.log(Object.entries(sahislar))

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

console.log("****************")
for (let key of Object.keys(sahislar)) {
  console.log(key)
}
