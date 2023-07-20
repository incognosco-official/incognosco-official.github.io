//------------------ To make header visible even when scrolling down & meanu icon
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function() {
  menu.classList.toggle("active");
});

const toggleButtons = document.querySelectorAll('.accordion-toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentNode.nextElementSibling;
    button.textContent = button.textContent === '+' ? '-' : '+';
    content.classList.toggle('active');
  });
});

//------------------ For Scroll Event & Fade-In Animation
// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event and trigger fade-in animation for different classes
function handleScroll() {
  const classesToFadeIn = ['aboutus', 'text', 'container-box', 'cta', 'faq'];
  classesToFadeIn.forEach((className) => {
    const fadeElements = document.querySelectorAll(`.${className}`);
    fadeElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate-fade-in');
      }
    });
  });
}

window.addEventListener('scroll', handleScroll);

//------------------ For Back-To-Top Button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');

  // Function to handle the click event for the back-to-top button
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Function to show or hide the back-to-top button based on scroll position
  function handleScroll() {
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }

  window.addEventListener('scroll', handleScroll);
});