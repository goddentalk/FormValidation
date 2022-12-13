function validateForm() {
    console.log('success prevent default submit')

    let name = document.forms['myForm']['name'].value
    console.log(name)
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    let email = document.forms['myForm']['email'].value
    console.log(validateEmail(email) )
    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/
        return re.test(email)
    }
}