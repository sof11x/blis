const carouselBlock = document.querySelector('.reviews__carousel');
const reviewItems = document.querySelectorAll('.reviews__item');
const prevBtn = document.querySelector('.reviews__btn-prev');
const nextBtn = document.querySelector('.reviews__btn-next');
let index = 0;

function showReview() {
    reviewItems.forEach((review, i) => {
        review.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextReview() {
    index++;
    if (index >= reviewItems.length) {
        index = 0;
    }
    showReview();
}

function prevReview() {
    index--;
    if (index < 0) {
        index = reviewItems.length - 1;
    }
    showReview();
}

nextBtn.addEventListener('click', nextReview);
prevBtn.addEventListener('click', prevReview);

//js для модального окна
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Простая проверка данных
    let isValid = true;

    // Проверка ФИО - должно быть хотя бы два слова
    if (fullname.split(' ').length < 2) {
        isValid = false;
    }

    // Проверка телефона - регулярное выражение на 10-13 цифр, возможен '+' на первом месте
    const phonePattern = /^\+?\d{10,13}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
    }

    // Проверка почты - HTML5 проверка типа email
    const emailPattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
    }

    if (isValid) {
        errorMessage.style.display = 'none';
        this.submit();  // Отправка формы если все данные корректны
    } else {
        errorMessage.style.display = 'block';
    }
});
//Открытие модального окна
document.querySelectorAll(".modal-btn_open").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelector(".modal").classList.add("open");
    });
});
//Закрытие модального окна
document.querySelector(".modal__close-btn").addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("open");
});

