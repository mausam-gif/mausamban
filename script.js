function autotype()
{
var typed = new Typed('#element', {
    strings: ['IT Student.', 'A Developer.', 'A Gamer.'],
    typeSpeed: 200,
    loop: true,
  });
}
autotype()

function loader(){
const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: "true",
});
tl.from(".title", {
  duration: 0.5,
  opacity: 0,
  y: 10,
});
tl.from(".bracket", {
  duration: 0.3,
  scale: 0,
  margin: 0,
});
tl.from("#loader", {
  duration: 0.2,
  scale: 0,
});
tl.from("img", {
  duration: 0.8,
  y: 150,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});
tl.from(
  ".bottom-line",
  {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: {
      amount: 0.1,
    },
  },
  "-=.5"
);

// initializing loader
let id,
  i = 0;
function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

// welcome screen
welcomeScreen.to(".loading-section, .loading-images-container", {
  y: -10,
  opacity: 0,
});
welcomeScreen.to(".loading-screen", {
  duration: 0.8,
  y: -2000,
  ease: "Power4.out",
});
// to make the document floating animation timing
welcomeScreen.from(
  ".home",
  {
    y: 100,
    duration: 1,
    stagger: {
      amount: 1,
    },
  },
  "-=.8"
);

}
loader()
// now for audio
function audio()
{
document.addEventListener("DOMContentLoaded", function () {
    const audioToggle = document.getElementById("audio-toggle");
    const backgroundAudio = document.getElementById("background-audio");
    const toggleText = document.querySelector(".toggle-text");
    const soundCloudIcon = document.querySelector(".sound-cloud");

    audioToggle.addEventListener("click", function () {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            toggleText.textContent = "On";
            audioToggle.classList.remove("audio-off");
            audioToggle.classList.add("audio-on");
            soundCloudIcon.style.color = "#1216ff"; // Change the icon color to green when audio is on
        } else {
            backgroundAudio.pause();
            toggleText.textContent = "Off";
            audioToggle.classList.remove("audio-on");
            audioToggle.classList.add("audio-off");
            soundCloudIcon.style.color = "#ff0000"; // Change the icon color to red when audio is off
        }
    });

    // Initialize audio state based on the initial state of the audio element
    if (backgroundAudio.paused) {
        toggleText.textContent = "Off";
        audioToggle.classList.add("audio-off");
        soundCloudIcon.style.color = "#ff0000"; // Initial color when audio is off
    } else {
        toggleText.textContent = "On";
        audioToggle.classList.add("audio-on");
        soundCloudIcon.style.color = "#1216ff"; // Initial color when audio is on
    }
});
}
audio()

//circles

function circle() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add('marked');
    }
  });


// Call the circle function initially


// Set an interval to call the circle function every 2 seconds
const intervalId = setInterval(circle, 9000);
}
circle()

//for menu
function menu() {
let  menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu); 
}
menu()

//stiky navbar

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50);

})

//toogle
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x")
  navlist.classList.toggle("open");
}

window.onscroll= ()=>{
  menuIcon.classList.remove("bx-x")
  navlist.classList.remove("open");
}

//parallax//

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
     entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollTop.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));