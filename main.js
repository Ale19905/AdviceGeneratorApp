import GetAdvice from "./services/GetAdvice.js"

const btn = document.querySelector('#get_Advice_Btn')

btn.addEventListener('click', () =>{
    GetAdvice()
    
})