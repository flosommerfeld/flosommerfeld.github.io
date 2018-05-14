var navBurger = document.getElementById("navBurger");
var navMenu = document.getElementById("navbarMenuHeroA");
var classElements = document.getElementsByClassName("closeMenu");//all elements with the closeMenu class

function closeMenu(){
  navBurger.classList.remove("is-active");
  navMenu.classList.remove("is-active");
}

function openMenu(){
  navBurger.classList.add("is-active");
  navMenu.classList.add("is-active");
}

navBurger.addEventListener("click",function(e){//event listener for the burger button
  if(navBurger.className.indexOf("is-active") == -1){
    openMenu();
    for (let i = 0; i < classElements.length; i++) {//set an event listener for each element with the closeMenu class
      classElements[i].addEventListener("click",function(e){
        closeMenu();
      }, false);
	  }
  }
  else{//close the menu
    closeMenu();
  }
},false);
