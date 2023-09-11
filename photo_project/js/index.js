window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header = document.getElementById("header");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("scrolled");
  } else {
     if(header.classList.contains("scrolled")){
        header.classList.remove("scrolled");
     }
  }
}