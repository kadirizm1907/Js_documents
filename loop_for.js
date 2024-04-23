// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

for (let i = 1; i <= 10; i++) {
  console.log(i) //? 12345678910
}


for (let i = 0; i != 10; i += 5) {
  console.log(i)
}//? 0 5



for (let i = 10; i >= 0; i--) {
  console.log(i)
}//? 10 9876543210

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu for dongusu ile yaziniz..

const n = Number(prompt("How many ramdom number do you want?"))
for (i = 0; i <= n; i++) {
  const randomNo = Math.round(Math.random() * 100)
  console.log(`Number ${i} random number is ${randomNo}`);
}



// 2 aralikta verilen dogal sayilarin toplamini bulan kodu for dongusu ile yaziniz.

const n1 = 5
const n2 = 15

let toplam = 0
for (let j = n1; j <= n2; j++) {
  toplam += j
}
console.log(toplam)

let n3 = 15
let n4 = 25
let toplam1 = 0

if (n3 >= n4) {
  console.log("Lütfen 1. sayiyi daha büyük giriniz")
} else {
  for (n3; n3 <= n4; n3++) {
    toplam += n1
  }

  console.log(toplam)
}

//?break, continue
for (let i = 0; i <= 10; i++) {
  if (i <= 5) {
    continue
  }

  if (i === 8) {
    break
  }

  console.log(i)
}
