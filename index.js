document.addEventListener("mousemove", parallax);

function parallax(event) {
    document.querySelectorAll(".parallax").forEach((elem) => {
        const position = elem.getAttribute("parallax");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

let popup = document.querySelector(".popup");
let htpEXE = document.querySelector(".htp-exe");

let exitButton = document.querySelector(".popup-exit-button");

exitButton.addEventListener("mousedown", () => {
    htpEXE.classList.remove("hidden");
    popup.classList.add("hidden");
});

htpEXE.addEventListener("mousedown", () => {
    popup.classList.remove("hidden");
    htpEXE.classList.add("hidden");
});