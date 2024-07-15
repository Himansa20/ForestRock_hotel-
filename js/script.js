// document.addEventListener('DOMContentLoaded', function () {
//     const menuItems = document.querySelectorAll('.moreoption__list-items a');

//     menuItems.forEach(item => {
//         item.addEventListener('click', function (event) {
//             event.preventDefault();
//             const targetUrl = this.getAttribute('href');
//             window.location.href = targetUrl;
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const navUser = document.querySelector('.nav__user');
    const userOption = document.querySelector('.user-option');

    navUser.addEventListener('click', () => {
        userOption.classList.toggle('visible');
    });

    // Close the user-option menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navUser.contains(event.target)) {
            userOption.classList.remove('visible');
        }
    });
});
//carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        moveToNextSlide(button.dataset.carouselButton === "next" ? 1 : -1)
    })
})

function moveToNextSlide(offset) {
    const slides = document.querySelector("[data-carousel] [data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

// Automatically change images every 3 seconds
setInterval(() => {
    moveToNextSlide(1)
}, 10000)

//Certificate popup

const certificateBtn = document.querySelector(".certificate-popup__btn");
const certificate__img = document.querySelector(".certificate__img");
const certificate = document.querySelector(".certificate");
const overlay = document.querySelector(".overlay");

certificateBtn.addEventListener('click', function () {
    overlay.classList.remove("hidden");
    certificate__img.classList.add("show-certificate");
})
overlay.addEventListener('click', function () {
    overlay.classList.add("hidden");
    certificate__img.classList.remove("show-certificate");
})