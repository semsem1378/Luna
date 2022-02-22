let squares = [...document.getElementsByClassName("square")];
let circles = [...document.getElementsByClassName("circles")];
let tris = [...document.getElementsByClassName("triangle")];
let nav = document.querySelector("section.secondSection nav");
let cards = document.querySelector("div.cards").childNodes;
let bullets = [...document.querySelectorAll(".bullets")];
let theme = document.querySelector("div.theme");
let flag = 1;
let myTheme = document.querySelector("html:root");

function moveShapes(e) {

    let x = ((e.clientX - window.innerWidth) / 30);
    let y = ((e.clientY - window.innerHeight) / 30);

    squares[0].style.transform = "rotate(-20deg) translate(" + x + "px," + y + "px)";
    squares[1].style.transform = "rotate(10deg) translate(" + x + "px," + y + "px)";
    squares[2].style.transform = "rotate(20deg) translate(" + x + "px," + y + "px)";
    squares[3].style.transform = "rotate(-10deg) translate(" + x + "px," + y + "px)";
    for (const circle of circles) {
        circle.style.transform = `translate(${-x}px,${-y}px)`;
    }

    tris[0].style.transform = "rotate(190deg) translate(" + (-x) + "px," + y + "px)";
    tris[1].style.transform = "rotate(140deg) translate(" + x + "px," + (-y) + "px)";


}
console.log(window.innerHeight);
function changeSlide() {
    let a = bullets.indexOf(this);
    a *= innerHeight;
    console.log(a);

    // let slowdown = setInterval(pager, 1);
    for (const bullet of bullets) {
        bullet.classList.remove("activePage");
    }
    this.classList.add("activePage");
    window.scrollTo(0, a);
    function pager() {
        if (window.scrollY < a) {
            if (a == window.scrollY) {
                clearInterval(slowdown);
                console.log(window.scrollY);

            } else {
                window.scrollBy(0, 1);

            }
        }
        if (window.scrollY > a) {
            if (a == window.scrollY) {
                clearInterval(slowdown);
            } else {
                window.scrollBy(0, -1);
            }
        }
    }
}

function navManager() {

    if (window.innerHeight - 200 < window.scrollY) {
        nav.classList.add("scroll");

    } else {
        nav.classList.remove("scroll");
    }
    for (const bullet of bullets) {
        bullet.classList.remove("activePage");
    }
    let bulletIn = Math.round(window.scrollY / window.innerHeight);
    bullets[bulletIn].classList.add("activePage");

}
function cardsManager() {


    if ((window.innerHeight * 2) / 3 < window.scrollY) {
        let n = 0;
        let inter1 = setInterval(makeround, 200);
        function makeround() {
            cards[(2 * n + 1)].style.animationPlayState = "running";
            n++;
            if (n == 3) {
                clearInterval(inter1);
            }
        }
    }
}
function changeTheme() {
    if (flag == 1) {
        myTheme.classList.add("second");
        theme.classList.add("changeTheme");
        flag = 0;

    }else{
        myTheme.classList.remove("second")
        theme.classList.remove("changeTheme");
        flag = 1;
    }
}











window.addEventListener("mousemove", moveShapes);
window.addEventListener("touchmove", moveShapes);
// window.addEventListener("wheel", changeSlide);
window.addEventListener("scroll", navManager);
window.addEventListener("scroll", cardsManager);
for (const bullet of bullets) {
    bullet.addEventListener("click", changeSlide);
}
theme.addEventListener("click", changeTheme);