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

document.querySelectorAll(".modal-btn_open").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelector(".modal").classList.add("open");
    });
});

document.querySelector(".modal__close-btn").addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("open");
});
