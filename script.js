let countEL=document.getElementById("count-el")
 let count = 0
function increment(){
 count += 1
  countEL.innerText=count
}

let saveEl=document.getElementById("save-el")


 function save(){
    let counter =count+"-"
    saveEl.innerText +=counter
  console.log(saveEl.innerText)
}



