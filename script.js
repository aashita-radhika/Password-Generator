let inputSlider = document.getElementById("inpSlider")
let sliderValue = document.getElementById("sliderValue")
let passBox = document.getElementById("passBox")
let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let genBtn = document.getElementById("genBtn")

// Showing input slider value
sliderValue.innerText = inputSlider.value
inputSlider.addEventListener('input',
    () => {
        sliderValue.innerText = inputSlider.value
    }
)

genBtn.addEventListener('click', 
    () => {
        passBox.value = generatePassword(inputSlider.value);
    }
)

// Function

const generatePassword = (length) => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    const specialCharacters = '~!@#$%^&*';
    let genPw = ""
    let allChar = ""
    allChar += lowercase.checked ? lowerCaseLetters: ""
    allChar += uppercase.checked ? upperCaseLetters: ""
    allChar += numbers.checked ? nums: ""
    allChar += symbols.checked ? specialCharacters: ""

    if (allChar == "" || allChar.length == 0){
        return genPw
    }

    for (let i = 0; i <= length; i++){
        genPw += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }

    return genPw
}

// let upperChar = Math.floor(Math.random() * 26) + 65
// let lowerChar = Math.floor(Math.random() * 26) + 97
// let allNum = Math.floor(Math.random() * 10)
// let upperChar = Math.floor(Math.random() * 26) + 65

let copyIcon = document.getElementById("copy")
copyIcon.addEventListener('click',
    () => {
        if (passBox.value != "" || passBox.length >= 1){
            navigator.clipboard.writeText(passBox.value);
            copyIcon.title = "Copied!";
            copyIcon.innerText = "check"
            setTimeout(() => {
                copy.innerText = "content_copy"
                copy.title = ""
            }, 2500)
        }
    }   
);
