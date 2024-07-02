
let number = document.querySelector("#guess-number")
const realNumber = document.querySelector("#realNumber")
const msg = document.querySelector(".msg")
const checkBtn = document.querySelector(".check")
const againBtn = document.querySelector(".again")
let strikes = document.getElementById("str")

const imgThinking = document.getElementById("gifT")
const imgCongra = document.getElementById("gifC")
const imgNo = document.getElementById("gifN")
const soundYes = document.getElementById("soundYes")
const soundNo = document.getElementById("soundNo")


let randomNo = Math.ceil(Math.random() * 20)
console.log(randomNo);


let score = 5
let topScoreShow = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = topScoreShow



document.addEventListener("DOMContentLoaded", (event) => {


    checkBtn.addEventListener("click", () => {
        const guess = number.value
        //! if click without value
        if (!guess) {
            msg.textContent = "Please write a number."
            //! if guess is correct
        } else if (guess == randomNo) {
            msg.textContent = "Congratulations! You did it!!!"
            document.querySelector("body").style.backgroundColor = "green"
            msg.style.color = "green"
            imgCongra.style.display = "block"
            soundYes.play()
            number.disabled = true
            checkBtn.disabled = true
            realNumber.textContent = randomNo
            realNumber.style.backgroundColor = "green"
            realNumber.style.color = "white"

            if (score > topScoreShow) {
                localStorage.setItem("top-score", score)
                topScoreShow = score
                document.querySelector(".top-score").textContent = topScoreShow

            }
            //!if guess wrong
        } else if (score > 1) {
            score--;
            document.querySelector(".score").textContent = score
            strikes.textContent = score;


            guess < randomNo ?
                (msg.textContent = "TOO SMALL NUMBER ⬆⬆⬆") :
                (msg.textContent = "TOO BIG NUMBER ⬇⬇⬇")

            soundNo.play()
        }

        else if (guess == randomNo) {
            imgCongra.style.display = "block"
            soundYes.play()
        } else {
            msg.textContent = "GAME OVER!!! TRY AGAIN"
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
            msg.style.color = "red"
            document.querySelector(".strike").textContent = "NO STRIKES LEFT"
            document.querySelector(".strike").style.color = "red"
            number.disabled = true
            checkBtn.disabled = true
            realNumber.textContent = randomNo
            realNumber.style.backgroundColor = "white"
            realNumber.style.color = "red"
            imgNo.style.display = "none"

        }
    }
    )
    againBtn.addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "#2d3436";

        randomNo = Math.ceil(Math.random() * 20)
        console.log(randomNo);
        score = 5
        
               strikes.textContent = score;
        document.querySelector(".score").textContent = strikes.value
       
        realNumber.textContent = "?"
        msg.textContent = "New Game starts"
        checkBtn.disabled = false
        number.disabled = false
        document.querySelector(".guess").value = "";
        number.style.color = "black"
        number.style.backgroundColor = " #9d8f8f"
        realNumber.style.backgroundColor = " #9d8f8f"
        realNumber.style.color = "black"
        msg.style.color = "black"  
       
         // document.querySelector(".score").textContent = score
   

        number.focus()

    })

    document.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            checkBtn.click()
        }
    })

    checkBtn.addEventListener("click", () => {
        let guess = number.value
        let guessNumber = parseInt(guess)

        if (guessNumber >= 1 && guessNumber <= 20 && !isNaN(guessNumber)) {
            // TODO document why this block is empty


        } else {
            msg.textContent = "Check the number and write again"
            // checkBtn.disabled = true
            // msg.style.color = "red"
            // document.querySelector("#guess-number").style.color = "red"
            score++
        }
    })

    window.addEventListener("load", () => {
        number.focus()
    })
})
