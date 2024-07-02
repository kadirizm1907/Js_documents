// Kodlar buraya yazılacak.

const header = document.querySelector(".header")
header.style.cssText = "background-color:red; color:white;padding:1rem;text-align:center"

const title = document.getElementById("title")
title.textContent = "Javascript Dom Assignment 1"

const navItem = document.querySelector(".nav-item")
navItem.style.cssText = "display:flex; gap:1rem;align-items:center; justify-content:center;list-style:none"

const username= document.querySelector("#username")
const password = document.querySelector("#password")
username.value = "Kadir"
username.disabled= true
password.disabled= true
password.value = "123456789"
password.type = "text"


const btn = document.querySelector(".btn")
btn.style.cssText = "background-color:lightgreen;color:black;padding:9px;border-radius:6px;border:none;cursor:pointer; font-size:1rem"
btn.textContent = "Enter"


const projectSection = document.getElementById("projects")
projectSection.firstElementChild.textContent= "Js Dom Projects"
projectSection.lastElementChild.innerHTML += `
<li>Hello World!</li>
<li>Guess Number</li>
<li>Checkout Page</li>
<li>Gelir-Gider Projesi</li>
<li>Api Projects</li>
`