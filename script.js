const animaScroll = document.querySelectorAll("[data-show]");

function showElement(){
  const windowHeight = window.innerHeight * .3;
  animaScroll.forEach((item) => {
    distanciaTop = item.getBoundingClientRect().top;
    distanciaSection = distanciaTop - windowHeight  < 0;
    if (distanciaSection){
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  })
  
}

window.addEventListener("scroll", showElement);

