const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBtn.addEventListener("click", () =>{
    links.classList.add("menu-open");
});
closeBtn.addEventListener("click", () =>{
    links.classList.remove("menu-open")
});


// Mobile dropdown toggle
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});


