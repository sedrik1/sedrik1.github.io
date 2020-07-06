function openModalOne() {
  document.getElementById("myModalOne").style.display = "block";
}

function closeModalOne() {
  document.getElementById("myModalOne").style.display = "none";
}

let slideIndexOne = 1;
showSlidesOne(slideIndexOne);

function plusSlidesOne(m) {
  showSlidesOne(slideIndexOne += m);
}

function currentSlideOne(m) {
  showSlidesOne(slideIndexOne = m);
}

function showSlidesOne(m) {
  let j;
  let slidesOne = document.getElementsByClassName("mySlidesOne");
  let dotsOne = document.getElementsByClassName("demoOne");
  let captionTextOne = document.getElementById("captionOne");
  if (m > slidesOne.length) {slideIndexOne = 1; }
  if (m < 1) {slideIndexOne = slidesOne.length; }
  for (j = 0; j < slidesOne.length; j++) {
      slidesOne[j].style.display = "none";
  }
  for (j = 0; j < dotsOne.length; j++) {
      dotsOne[j].className = dotsOne[j].className.replace(" activeOne", "");
  }
  slidesOne[slideIndexOne-1].style.display = "block";
  dotsOne[slideIndexOne-1].className += " activeOne";
  captionTextOne.innerHTML = dotsOne[slideIndexOne-1].alt;
}