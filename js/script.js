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
