const slider = document.getElementById('slider');
const images = slider.getElementsByTagName('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
   for (let i = 0; i < images.length; i++) {
      if (i === index) {
         images[i].style.display = 'block';
      } else {
         images[i].style.display = 'none';
      }
   }
}

function updateButtons() {
   if (currentIndex === 0) {
      prevBtn.style.display = 'none';
   } else {
      prevBtn.style.display = 'block';
   }

   if (currentIndex === images.length - 1) {
      nextBtn.style.display = 'none';
   } else {
      nextBtn.style.display = 'block';
   }
}

function showNextImage() {
   if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage(currentIndex);
      updateButtons();
   }
}

function showPrevImage() {
   if (currentIndex > 0) {
      currentIndex--;
      showImage(currentIndex);
      updateButtons();
   }
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

showImage(currentIndex);
updateButtons();