const darkButton = document.querySelector("#darkBtn")
const nav = document.querySelector("nav")
const article = document.querySelector("article")

darkButton.addEventListener("click", ()=>{
  document.body.classList.toggle("bg-gray-800")
  nav.classList.toggle("bg-gray-700")

  article.classList.toggle("darkArticle")
  
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
  const h1 = document.querySelector(".text-center")
  const link = query.classList[3]
  switch (link) {
    case "fa-user":
      h1.innerText = "About"
      break;
    case "fa-utensils":
      h1.innerText = "Skills"
      break;
    case "fa-paper-plane":
      h1.innerText = "Contact Me"
      break;
  
    default:
      h1.innerText = "Home"
      break;
  }
}