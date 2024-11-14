var elSiteHeader = document.querySelector(".site-header-js");
var elShowMenuBtn = elSiteHeader.querySelector(".js-hamburg-btn");

elShowMenuBtn.addEventListener("click", function() {

  elSiteHeader.classList.toggle("show-menu");
})

