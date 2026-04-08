document.addEventListener("mousemove", parallax);

function parallax(event) {
    document.querySelectorAll(".parallax").forEach((elem) => {
        const position = elem.getAttribute("parallax");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}