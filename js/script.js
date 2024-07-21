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

//Booking date function

const dateSet = document.querySelectorAll(".datepicker-toggle-button");
const dateInput = document.querySelectorAll('.datepicker-input');

let x = dateInput.value;
// Create a new Date object
let currentDate = new Date();

// Get the day of the month
let day = currentDate.getDate();
let nextDate = new Date(currentDate);
nextDate.setDate(currentDate.getDate() + 1);
let dayNext = nextDate.getDate();

let month = currentDate.getMonth();

let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let MonthName = monthNames[month];
dateSet[0].textContent = `${day}${MonthName}`;
dateSet[1].textContent = `${dayNext}${MonthName}`;
/*
dateInput.addEventListener('change', function () {
    let cuurrent = document.querySelector(".current-date");
    let BookingDate = dateInput.value;
    cuurrent.textContent = BookingDate;
})

dateInput.addEventListener('change', function () {
    let leave = document.querySelector(".leave-date");
    let leaveDate = document.querySelector(".datepicker-input");
    let BookingDate = leaveDate.value;
    leave.textContent = BookingDate;
})
    */
dateInput[0].addEventListener('change', function () {
    let cuurrent = document.querySelector(".current-date");
    let BookingDate = dateInput[0].value;
    cuurrent.textContent = BookingDate;
});
dateInput[1].addEventListener('change', function () {
    let leave_date = document.querySelector(".leave-date");
    let BookingDate = dateInput[1].value;
    leave_date.textContent = BookingDate;
});
/*
const btnBook = document.querySelector(".navigation-button--primary");

const dropbox = document.querySelector(".nav__bokking-dropdown");

btnBook.addEventListener('click', function () {
    let removecls = document.querySelector('.hide-booking');
    removecls.classList.remove('hide-booking');
})
*/
document.addEventListener('DOMContentLoaded', () => {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const bookingDropdown = document.getElementById('bookingDropdown');

    bookNowBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        bookingDropdown.classList.toggle('hide-booking');
    });

    document.addEventListener('click', (event) => {
        if (!bookingDropdown.contains(event.target) && !bookNowBtn.contains(event.target)) {
            bookingDropdown.classList.add('hide-booking');
        }
    });
});
