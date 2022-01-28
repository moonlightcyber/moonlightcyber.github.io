"use strict"

const $form = document.getElementById('form')
const $firstName = document.getElementById('first-name')
const $lastName = document.getElementById('last-name')
const $age = document.getElementById('age')
const $email = document.getElementById('emil')
const $submit = document.getElementById('submit')

const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/

$submit.addEventListener('click', () => {
    let firstName = $firstName.value.trim(); 
    let age = $age.value.trim();
    let lastName = $lastName.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;

    if (firstName === '') {
        message += "first name is required\n"
        valid = false;
        count++;
    }

    if (firstName === '') {
        message += "last name is required\n"
        valid = false;
        count++;
    }

    if (firstName === '') {
        message += "age is required\n"
        count++;
    } else {
        let ageInt = parseInt(age);

        if (isNaN(age) || (ageInt < 16 || ageInt > 120)) {
            message += "age is not valid\n"
            valid = false;
        }
    }

    if (email === '') {
        message += "last name is required\n"
        count++;
    } else {
        if(!emailPattern.test(email)) {
            valid = false;
        }
    }

    if (count === 4) {
        alert('all feilds are required')
    } else if (!valid) {
        alert(message);
    } else {
        $form.submit()
        console.log('form submitted')
    }

    alert(message);
    alert(count);
});