const darkButton = document.querySelector("#darkBtn")
const nav = document.querySelector("nav")

darkButton.addEventListener("click", ()=>{
  document.body.classList.toggle("bg-gray-800")
  nav.classList.toggle("bg-gray-700")
  
  const buttons = nav.querySelectorAll("button")
  for(let btn of buttons){
    btn.classList.toggle("text-white")
  }
  
  if( darkButton.classList.contains("fa-moon") ){
    darkButton.classList.remove("fa-moon")
    darkButton.classList.add("fa-sun")
  }else{
    darkButton.classList.remove("fa-sun")
    darkButton.classList.add("fa-moon")
  }
})

const navLink = document.querySelectorAll("nav button")
navLink.forEach(link =>{
    if( !link.classList.contains("fa-moon")){
      link.addEventListener('click', ()=>{
        paging(link)
        document.querySelector(".active")?.classList.remove("active")
        link.classList.add("active")
    })
  }
})

function paging(query) {
  console.log(query.classList[3]);
}