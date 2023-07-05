var personContainer = document.querySelector('.person-container');

personContainer.addEventListener('click', function() {
  personContainer.classList.toggle('active');
});

var isAnimating = false;

function scrollLeftAnimate(elem, unit) {

    if (!elem || isAnimating) {
       
        return;
    }

    var time = 300; 
    var from = elem.scrollLeft; 
    var aframe =
        10; 
    isAnimating = true; 

    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            elem.scrollLeft = ((step * unit) + from);
            if (step === 1) {
                clearInterval(timer);
                isAnimating = false;
            }
        }, aframe);
}



function initDealCarrousel(dealCarrouselID) {
    var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
    var cardOutterWidth;
    var maxCarrouselScroll;

    function updateUpaCarrouselInfo() {
        cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
        maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
            cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
                .clientWidth;
    }

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info
            if (target.scrollLeft > 0) {
                scrollLeftAnimate(target, -cardOutterWidth * 2);
            }
        }
    );

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info 
            if (target.scrollLeft < maxCarrouselScroll) {
                scrollLeftAnimate(target, cardOutterWidth * 2);
            }
        }
    );
}

initDealCarrousel('va_container');


function openVideoWindow(videoId) {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    var closeBtn = document.getElementsByClassName('close')[0];

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');

    iframe.style.width = '500px';
    iframe.style.height = '400px';
    iframe.style.margin = '0 auto';

    videoPlayer.innerHTML = ""; 
    videoPlayer.appendChild(iframe);

    modal.style.display = 'block';
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        videoPlayer.innerHTML = "";
    });


}

document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.va-carrousel-flexbox1');
    var cardWidth = document.querySelector('.va-menucard').offsetWidth;
    var prevButton = document.querySelector('.deals-scroll-left1');
    var nextButton = document.querySelector('.deals-scroll-right1');
  
    function scrollNext() {
        carousel.scrollLeft += cardWidth;
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
          carousel.scrollLeft = 0;
        }
      }
    
      prevButton.addEventListener('click', function() {
        carousel.scrollLeft -= cardWidth;
      });
    
      nextButton.addEventListener('click', function() {
        scrollNext();
      });
      
      setInterval(scrollNext, 3000);
  });
  
  

  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.va-carrousel-flexbox2');
    var cardWidth = document.querySelector('.va-menucard2').offsetWidth;
    var prevButton = document.querySelector('.deals-scroll-left2');
    var nextButton = document.querySelector('.deals-scroll-right2');
  
    function scrollNext() {
        carousel.scrollLeft += cardWidth;
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
          carousel.scrollLeft = 0;
        }
      }
    
      prevButton.addEventListener('click', function() {
        carousel.scrollLeft -= cardWidth;
      });
    
      nextButton.addEventListener('click', function() {
        scrollNext();
      });
      
      setInterval(scrollNext, 3000);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.va-carrousel-flexbox3');
    var cardWidth = document.querySelector('.va-daycard').offsetWidth;
    var prevButton = document.querySelector('.deals-scroll-left3');
    var nextButton = document.querySelector('.deals-scroll-right3');
  
    function scrollNext() {
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollLeft += cardWidth;
      }
    }
  
    function scrollPrev() {
      if (carousel.scrollLeft === 0) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
      } else {
        carousel.scrollLeft -= cardWidth;
      }
    }
  
    prevButton.addEventListener('click', function() {
      scrollPrev();
    });
  
    nextButton.addEventListener('click', function() {
      scrollNext();
    });
  
    setInterval(scrollNext, 3000);
  });
  
  fetch('question.json')
  .then(response => response.json())
  .then(json => {
      let faqContainer = document.getElementById("faq-container");

      json.forEach(entry => {
          let question = entry.q;
          let answer = entry.a;

          let div = document.createElement("div");
          div.className = "faq";

          let questionHeader = document.createElement("h3");
          questionHeader.textContent = question;
          questionHeader.className = "faq-title";

          let answerParagraph = document.createElement("p");
          answerParagraph.textContent = answer;
          answerParagraph.className = "faq-text";

          let button = document.createElement("button");
          button.className = "faq-toggle";
          button.addEventListener("click", function () {
              div.classList.toggle('active');
          });

          let iconChevron = document.createElement("i");
          iconChevron.className = "fas fa-chevron-down";

          let iconTimes = document.createElement("i");
          iconTimes.className = "fas fa-times";

          button.appendChild(iconChevron);
          button.appendChild(iconTimes);

          div.appendChild(button);
          div.appendChild(questionHeader);
          div.appendChild(answerParagraph);

          faqContainer.appendChild(div);
      });
  })
  .catch(error => {
      console.error('JSON dosyası alınamadı veya geçerli bir formata sahip değil.', error);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.va-carrousel-flexbox4');
    var cardWidth = document.querySelector('.va-referance').offsetWidth;
    var prevButton = document.querySelector('.deals-scroll-left4');
    var nextButton = document.querySelector('.deals-scroll-right4');

    function scrollNext() {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    function scrollPrev() {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: 'smooth'
            });
        }
    }

    prevButton.addEventListener('click', function() {
        scrollPrev();
    });

    nextButton.addEventListener('click', function() {
        scrollNext();
    });

    setInterval(scrollNext, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.va-carrousel-flexbox5');
    var cardWidth = document.querySelector('.va-referance').offsetWidth;
    var prevButton = document.querySelector('.deals-scroll-left5');
    var nextButton = document.querySelector('.deals-scroll-right5');

    function scrollNext() {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    function scrollPrev() {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: 'smooth'
            });
        }
    }

    prevButton.addEventListener('click', function() {
        scrollPrev();
    });

    nextButton.addEventListener('click', function() {
        scrollNext();
    });

    setInterval(scrollNext, 3000);
});

$(document).ready(function(){
    $(".backtotop").hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
        $(".backtotop").fadeIn();
    }else {
        $(".backtotop").fadeOut();
    }

    }) 
})