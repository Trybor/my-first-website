//responsive navigation on scroll
const navWrap = document.getElementById("nav-wrap");
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navWrap.style.top = "0";
  } else {
    navWrap.style.top = "-200px";
  }
  prevScrollPos = currentScrollPos;
};

//email form

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const submit = document.getElementById("contactForm")[0];

submit.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("Submited!")
})