//nu laver vi en funktion. =() => betyder en anonym funktion.
//vi tager fat i burgeren og navigation. Det der skal ske nu er, at når man trykker
//på burgermenuen så vil vi have at nav-links skal have classen ".nav.active"
//

//for at få fat på de individuelle overskrifter og få dem ind på nav-slide-boxen
//tager man fat i navLinks.

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
  });
};

navSlide();
