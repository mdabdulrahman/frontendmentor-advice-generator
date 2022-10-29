let quote=document.querySelector("#quote")
let id=document.querySelector("#id")
let dice=document.querySelector("#dice")

let getQuote=async()=>{
    dice.classList.add("animate__rotateIn")
    let data=await fetch("https://api.adviceslip.com/advice")
let q=await data.json().then((v)=>{
    console.log(v)
    quote.innerHTML=v.slip.advice
id.innerHTML=v.slip.id
dice.classList.remove("animate__rotateIn")
})

}
getQuote()