//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")
let veri = ""
fetch("https://api.github.com/users")
 .then((res)=>{
    console.log(res)
    if(!res.ok){
        throw new Error(`hata: ${res.status}`)
    }
    return res.json()
 }) 
 .then((data)=>{
    veri = data
show(data)})
 .catch((err)=> console.log(err)) 

 const show = (users) => {
    const userSection = document.getElementById("users")
    users.forEach((user) => {
     userSection.innerHTML += `
      <h1> ${user.avatar_url}</h1> 
     ` 
     
    })
    }
    
 