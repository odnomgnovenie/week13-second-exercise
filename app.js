'use strict'

function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const birthday = new Date(birthdayInput.value);
    const today = new Date();

    if (!birthdayInput.value) {
        document.getElementById('error-msg').textContent = 'Пожалуйста, введите дату рождения.';
        return;
    } else {
        document.getElementById('error-msg').textContent = '';
    }

    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    var daysLeft = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
    var resultElement = document.getElementById('result');

    if (daysLeft === 0) {
        resultElement.textContent = 'С Днем Рождения!';
    } else if (daysLeft === 1) {
        resultElement.textContent = 'Остался ' + daysLeft + ' день до дня рождения.';
    } else if (daysLeft <= 4) {
        resultElement.textContent = 'Осталось ' + daysLeft + ' дня до дня рождения.';
    } else {
        resultElement.textContent = 'Осталось ' + daysLeft + ' дней до дня рождения.';
    }
}