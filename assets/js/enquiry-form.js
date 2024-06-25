
const enquiryForm = document.getElementById("enquiry");


enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    let isAllDataValid = false;

    if(first_name !== "" && first_name?.length > 2) {
        console.log("First Name is valid");
        isAllDataValid = true;
    }
    else {
        isAllDataValid = false;
    }

    if(last_name !== "" && last_name?.length > 2) {
        console.log("Last Name is valid");
        isAllDataValid = true;
    }
    else {
        isAllDataValid = false;
    }

    if(email !== "" && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log("Email is valid");
        isAllDataValid = true;
    }
    else {
        isAllDataValid = false;
    }

    if(phone !== "" && /^[6-9]\d{9}$/.test(phone)) {
        console.log("Phone is valid");
        isAllDataValid = true;
    }

    else {
        isAllDataValid = false;
    }

    if(isAllDataValid) {
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
                phone
            })
        }).then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            alert("Enquiry submitted successfully")
            enquiryForm.reset()
        }).catch(function(error) {
            console.log(error);
        })
    }

    else {
        console.log("All data/some data is invalid");
    }
})