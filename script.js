let countEL=document.getElementById("count-el")
 let count = 0
function increment(){
 count += 1
  countEL.innerText=count
}

let saveEl=document.getElementById("save-el")


 function save(){
  let counter =count+" - "
  saveEl.textContent +=counter
  console.log(saveEl.textContent)
  countEL.innerText=0
  count = 0
}


