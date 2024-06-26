
const enquiryForm = document.getElementById("enquiry");


enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;

    let isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid = false;

    if(first_name !== "" && first_name?.length > 2) {
        console.log("First Name is valid");
        isFirstNameValid = true;
        const input = document.getElementById("first_name");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
    else {
        isFirstNameValid = false;
        const input = document.getElementById("first_name");
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    if(last_name !== "" && last_name?.length > 2) {
        console.log("Last Name is valid");
        isLastNameValid = true;
        const input = document.getElementById("last_name");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
    else {
        isLastNameValid = false;
        const input = document.getElementById("last_name");
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    if(email !== "" && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log("Email is valid");
        isEmailValid = true;
        const input = document.getElementById("email");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
    else {
        isEmailValid = false;
        const input = document.getElementById("email");
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    if(phone !== "" && /^[6-9]\d{9}$/.test(phone)) {
        console.log("Phone is valid");
        isPhoneValid = true;
        const input = document.getElementById("phone");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
    else {
        isPhoneValid = false;
        const input = document.getElementById("phone");
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    if(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
        console.log("All data is valid");
        fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY1MDYzMjA0M2M1MjY0NTUzNjUxMzUi_pc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                phone,
                message
            })
        }).then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            alert("Enquiry submitted successfully")
            enquiryForm.reset()
            const firstName = document.getElementById("first_name")
            firstName.classList.remove("is-valid")

            const lastName = document.getElementById("last_name")
            lastName.classList.remove("is-valid")

            const email = document.getElementById("email")
            email.classList.remove("is-valid")

            const phone = document.getElementById("phone")
            phone.classList.remove("is-valid")
        }).catch(function(error) {
            console.log(error);
        })
    }

    else {
        console.log("All data/some data is invalid");
    }
})