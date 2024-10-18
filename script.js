let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");


btn.addEventListener("click", ()=>{
    if(bulb.classList.contains("glow")){
        bulb.classList.remove("glow");
        bulb.classList.add("bulb");
        btn.innerText = "OFF"
    }else{
        bulb.classList.add("glow");
        bulb.classList.remove("bulb")
        btn.innerText = "ON"
    }
});