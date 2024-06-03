const carouselBlock = document.querySelector('.reviews__carousel');
const reviewItems = document.querySelectorAll('.reviews__item');
const prevBtn = document.querySelector('.reviews__btn-prev');
const nextBtn = document.querySelector('.reviews__btn-next');
let index = 0;
function showReview() {
    reviews.forEach((review, i) => {
        review.style.transform = `translateX(-${index * 100}%)`;
    }); }
function nextReview() {
    index++;
    if (index >= reviews.length) {
        index = 0;
    }
    showReview(); }
function prevReview() {
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    showReview(); }
nextBtn.addEventListener('click', nextReview);
prevBtn.addEventListener('click', prevReview);
document.getElementById("reviews__open-modal-btn").addEventListener("click", function()
{
        document.querySelector(".reviews__modal").classList.add("open");
});

document.getElementById("reviews__close-modal-btn").addEventListener("click", function()
{
        document.querySelector(".reviews__modal").classList.remove("open");
});
// document.querySelector(".reviews__open-modal-btn").addEventListener("click", function()
// {
//         document.querySelector(".reviews__modal").classList.add("reviews__modal_open")
// });
// document.querySelector(".reviews__close-modal-btn").addEventListener("click", function()
// {
//         document.querySelector(".reviews__modal").classList.remove("reviews__modal_open")
// });

