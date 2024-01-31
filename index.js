    let x = parseInt(Math.ceil(Math.random() * 100))
    console.log(x)
    let y = parseInt(Math.ceil(Math.random() * 100))
    console.log(y)



let inputBox1=document.querySelector(".box-1")
inputBox1.value=x
let inputBox2=document.querySelector(".box-2")
inputBox2.value=y
let z = x+y
console.log(z)

let btn1El=document.querySelector(".btn1").addEventListener('click',function(){
    let inputBox3=document.querySelector(".box-3")
    a = parseInt(inputBox3.value)
    if(a===z){
        let warningEl = document.querySelector(".warning h3")
        warningEl.style.display = "block"
        warningEl.style.background = "green"
        warningEl.textContent = "Congrats"
    }
    else{
        let warningEl = document.querySelector(".warning h3")
        warningEl.style.display = "block"
        warningEl.style.background = "darkblue"
        warningEl.textContent = "Try Again"
    }
})

let btn2El=document.querySelector(".btn2").addEventListener('click',function(){
    location.reload();
})
