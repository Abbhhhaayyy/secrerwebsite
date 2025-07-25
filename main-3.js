let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Hide all images
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change image every 3 seconds
  setTimeout(showSlides, 3000);
}