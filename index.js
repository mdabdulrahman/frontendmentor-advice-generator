let quote=document.querySelector("#quote")
let id=document.querySelector("#id")
let getQuote=async()=>{
    let data=await fetch("https://api.adviceslip.com/advice")
let q=await data.json().then((v)=>{
    console.log(v)
    quote.innerHTML=v.slip.advice
id.innerHTML=v.slip.id
})

}
getQuote()