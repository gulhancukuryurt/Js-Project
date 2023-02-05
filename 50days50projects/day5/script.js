const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

var load = 0; 

var pageint = setInterval(blurring, 60);

function blurring() {
    load++;
    if(load > 101){
        clearInterval(pageint);
    }

    loadingText.innerHTML= `${load}%`;
    loadingText.style.opacity=scale(load, 0, 100, 30, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

