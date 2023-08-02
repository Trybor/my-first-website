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

//  // Show the success message
function showSuccessMessage(event) {
  event.preventDefault();
  document.getElementById('success-message').style.display = 'block';
}