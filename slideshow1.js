function openModalOne() {
  document.getElementById("myModalOne").style.display = "block";
}

function closeModalOne() {
  document.getElementById("myModalOne").style.display = "none";
}

let slideIndexOne = 1;
showSlidesOne(slideIndexOne);

function plusSlidesOne(n) {
  showSlidesOne(slideIndexOne += n);
}

function currentSlideOne(n) {
  showSlidesOne(slideIndexOne = n);
}

function showSlidesOne(n) {
  let j;
  let slidesOne = document.getElementsByClassName("mySlidesOne");
  let dotsOne = document.getElementsByClassName("demoOne");
  let captionTextOne = document.getElementById("captionOne");
  if (n > slidesOne.length) {slideIndexOne = 1; }
  if (n < 1) {slideIndexOne = slidesOne.length; }
  for (j = 0; j < slidesOne.length; j++) {
      slidesOne[j].style.display = "none";
  }
  for (j = 0; j < dotsOne.length; j++) {
      dotsOne[j].className = dotsOne[j].className.replace(" active", "");
  }
  slidesOne[slideIndex-1].style.display = "block";
  dotsOne[slideIndex-1].className += " active";
  captionTextOne.innerHTML = dotsOne[slideIndex-1].alt;
}