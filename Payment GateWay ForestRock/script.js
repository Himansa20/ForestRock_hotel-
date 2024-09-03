document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const fullName = form.querySelector('input[placeholder="Gihan Ishara"]').value;
        const email = form.querySelector('input[placeholder="example@example.com"]').value;
        const address = form.querySelector('input[placeholder="Room - Street- Locality"]').value;
        const city = form.querySelector('input[placeholder="Pitipana"]').value;
        const state = form.querySelector('input[placeholder="Mahahenwatta"]').value;
        const zipCode = form.querySelector('input[placeholder="12000"]').value;
        const cardName = form.querySelector('input[placeholder="Mr. Gihan Ishara"]').value;
        const cardNumber = form.querySelector('input[placeholder="1111-2222-3333-4444"]').value;
        const expMonth = form.querySelector('input[placeholder="October"]').value;
        const expYear = form.querySelector('input[placeholder="2025"]').value;
        const cvv = form.querySelector('input[placeholder="722"]').value;
        
        // Validation checks
        if (!fullName || !email || !address || !city || !state || !zipCode || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
            alert('Please fill out all fields.');
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        if (!cardNumberPattern.test(cardNumber)) {
            alert('Please enter a valid credit card number in the format 1111-2222-3333-4444.');
            return;
        }
        
        alert('Form submitted successfully!');
        form.submit(); 
    });
});
