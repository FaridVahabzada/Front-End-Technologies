$("document").ready(function() {
    $("#contact button").click(contactInfo)
})

function contactInfo() {
    // Asking for telephone number:
    let telephone_number = prompt("Please enter your phone number:", "1-123-456-789")
    while (telephone_number == "" || telephone_number == "1-123-456-789") { // Checking for conditions.
        alert("This field MUST be filled correctly!")
        telephone_number = prompt("Please enter your phone number:", "1-123-456-789")
    }
    
    // Asking for email:
    let email = prompt("Please enter your email address:", "me@fakemail.com")
    while (email.indexOf("@") < 0 || email.indexOf(".") < 0 || email == "" || email == "me@fakemail.com") { // Checking for conditions.
        alert("This field MUST be filled correctly, and MUST include BOTH '@' and '.' symbols!")
        email = prompt("Please enter your email address:", "me@fakemail.com")
    }
    
    // Asking for address:
    let address = prompt("Please enter your address:", "1445 West Norwood Avenue in Itasca, Illinois")
    while (address == "") { // Checking for conditions. //|| address == "1445 West Norwood Avenue in Itasca, Illinois"
        alert("This field MUST be filled correctly!")
        address = prompt("Please enter your address:", "1445 West Norwood Avenue in Itasca, Illinois")
    }

    // Updating telephone number:
    $("#contactDetails p:first").html(telephone_number)

    // Updating email:
    $("#contactDetails p:odd").html(email)

    // Updating address:
    $("#contactDetails p:last").html(address)
    
    // Printing data entered in the console:
    console.log("From: " + email)
    console.log("Contact: " + telephone_number)
    console.log("Address: " + address)
    
}