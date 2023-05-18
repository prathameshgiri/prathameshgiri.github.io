let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "JAVA Programmer";
  }, 4000);
  setTimeout(() => {
        text.textContent = "Graphic Designer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 12000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 16000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 20000);