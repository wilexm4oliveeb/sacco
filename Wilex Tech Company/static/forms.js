document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    if(!validateForm(event)) {
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("formOutput").innerText = `Thank you, ${name}! We have received your email: ${email}.`;
});


function validateForm(event) {
    const name = document.getElementById("name").value.trim();
    if (!name) {
        event.preventDefault();
        alert("Name field cannot be empty.");
        return false;
    }

    const email = document.getElementById("email").value.trim();
    if (!email) {
        event.preventDefault();
        alert("Name field cannot be empty.");
        return false;
    }

    return true;
}