document.onreadystatechange = () => {//wait for the DOM to be ready
  if (document.readyState === 'complete') {

    var navBurger = document.getElementById("navBurger");
    var navMenu = document.getElementById("navbarMenuHeroA");

    navBurger.addEventListener("click",function(e){//event listener for the burger button
      if(navBurger.className.indexOf("is-active") == -1){//open the menu
        navBurger.className += " is-active";
        navMenu.className += " is-active";
      }
      else{//close the menu
        navBurger.className = "navbar-burger burger";
        navMenu.className = "navbar-menu";
      }
    },false);

  }
};
