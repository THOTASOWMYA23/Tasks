function validateForm() {
    // Fetching input values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Error message elements
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var phoneNumberError = document.getElementById('phoneNumberError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // Resetting previous error messages
    firstNameError.innerHTML = '';
    lastNameError.innerHTML = '';
    phoneNumberError.innerHTML = '';
    passwordError.innerHTML = '';
    confirmPasswordError.innerHTML = '';

    // Validation
    var isValid = true;

    if (firstName === '') {
        firstNameError.innerHTML = 'First Name is required';
        isValid = false;
    }

    if (lastName === '') {
        lastNameError.innerHTML = 'Last Name is required';
        isValid = false;
    }

    if (phoneNumber === '') {
        phoneNumberError.innerHTML = 'Phone Number is required';
        isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
        phoneNumberError.innerHTML = 'Phone Number must be 10 digits';
        isValid = false;
    }

    if (password === '') {
        passwordError.innerHTML = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = 'Password must be at least 6 characters long';
        isValid = false;
    }

    if (confirmPassword === '') {
        confirmPasswordError.innerHTML = 'Confirm Password is required';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.innerHTML = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}