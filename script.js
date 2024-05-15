// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//   if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide");
//     video.pause();
//   } else {
//     btn.classList.remove("slide");
//     video.play();
//   }
// });


// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });


var video = document.getElementById("myVideo");
var btn = document.getElementById("watch");

function playVideo(){
    if(video.paused){
        video.play();
        btn.querySelector('.fa').classList.replace('fa-play-circle', 'fa-pause-circle');
    } else{
        video.pause();
        btn.querySelector('.fa').classList.replace('fa-pause-circle', 'fa-play-circle');
    }
}