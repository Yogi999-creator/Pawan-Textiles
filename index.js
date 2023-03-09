/* function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    };
    const serviceID = "service_l4drzwn";
const templateID = "template_rrqkvjr";

emailjs.send(serviceID, templateID, params)
.then(
    res => {
        document.getElementById("name").value = "",
        document.getElementById("email").value= "",
        document.getElementById("message").value= "",
        console.log(res);
        alert("Message sent successfully")
    }
).catch((err) => console.log(err));
} */



function sendMail() {
    // Get form elements
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    // Check if all fields have a value
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Prepare email parameters
    var params = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // Send email using EmailJS
    const serviceID = "service_l4drzwn";
    const templateID = "template_rrqkvjr";
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Reset form inputs
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";

            // Display success message
            alert("Message sent successfully");
            console.log(res);
        })
        .catch((err) => console.log(err));
}
 




  

