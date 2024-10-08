// dateInput[0].addEventListener('change', function () {
//     let cuurrent = document.querySelector(".current-date");
//     let BookingDate = dateInput[0].value;
//     cuurrent.textContent = BookingDate;
// });
// dateInput[1].addEventListener('change', function () {
//     let leave_date = document.querySelector(".leave-date");
//     let BookingDate = dateInput[1].value;
//     leave_date.textContent = BookingDate;
// });

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

// middleBookingPart
document.getElementById('availability-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const nationality = document.getElementById('nationality').value;

    console.log('Check-in:', checkin);
    console.log('Check-out:', checkout);
    console.log('Nationality:', nationality);

    // You can add further logic here, such as sending the data to a server
});