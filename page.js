document.addEventListener('DOMContentLoaded', function () {
  const enterFullscreenButton = document.getElementById('enterFullscreen');// i've created this const to enterfullscreen. by the ID we get the element
  const exitFullscreenButton = document.getElementById('exitFullscreen');// i've created this const to exitfullscreen. by the IDName.
  const img = document.querySelector('img.homeimage2');// here is getting the image from the class

  const toggleFullscreen = () => { //Takes the window into or out of fullscreen mode
      if (!document.fullscreenElement) {
          img.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen mode: ${err.message}`);
          });
      } else {
          document.exitFullscreen();
      }
  };

  enterFullscreenButton.addEventListener('click', () => {
      toggleFullscreen();
  });
    document.addEventListener('DOMContentLoaded', function () {
            const enterFullscreenButton = document.getElementById('enterFullscreen');
            const exitFullscreenButton = document.getElementById('exitFullscreen');
            const img = document.querySelector('img.homeimage');

            const toggleFullscreen = () => {
                if (!document.fullscreenElement) {
                    img.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                    });
                } else {
                    document.exitFullscreen();
                }
            };

            enterFullscreenButton.addEventListener('click', () => {
                toggleFullscreen();
            });

            exitFullscreenButton.addEventListener('click', () => {
                document.exitFullscreen();
            });

            const onChange = () => {
                const isFullscreen = document.fullscreenElement === img;
                enterFullscreenButton.style.display = isFullscreen ? 'none' : 'block';
                exitFullscreenButton.style.display = isFullscreen ? 'block' : 'none';
                img.classList.toggle('fullscreen', isFullscreen);
            };

            document.addEventListener('fullscreenchange', onChange);
        });

//   exitFullscreenButton.addEventListener('click', () => {
//       document.exitFullscreen();
//   });

  const onChange = () => {
      const isFullscreen = document.fullscreenElement === img;
      enterFullscreenButton.style.display = isFullscreen ? 'none' : 'block';
      exitFullscreenButton.style.display = isFullscreen ? 'block' : 'none';
      img.classList.toggle('fullscreen', isFullscreen);
  };

  document.addEventListener('fullscreenchange', onChange);
});

// SLIDEs
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}