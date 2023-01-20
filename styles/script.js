// nu skal vi have adgang til burger-classen. queryselectoren fanger classen. Bagefter får vi også adgang til nav-menuen
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

// Tilføjer en eventlistener til burgeren. når man klikker på burgermenuen så vil vi aktivere classen der får den til at blive et x,
// og også den class der viser menuen foldet ud.

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Nu vil vi gerne have at når man klikker på et af linksne i den udfoldede menu, så lukker hele menuen.
// Det der sker nedenunder: for hver link tilføjer vi en eventlistener. det er et clickevent. Vi vil nu fjerne "active"classen
//fra både burger og nav-menu så vi bruger classlist.remove("active")

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
