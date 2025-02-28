document.addEventListener("DOMContentLoaded", function () {
    let prevButton = document.getElementById('prev');
    let nextButton = document.getElementById('next');
    let items = document.querySelectorAll('.list .item');
    let dots = document.querySelectorAll('.indicators ul li');
    let numberIndicator = document.querySelector('.number');

    let active = 0;

    function updateCarousel() {
        document.querySelector('.list .item.active').classList.remove('active');
        document.querySelector('.indicators ul li.active').classList.remove('active');

        items[active].classList.add('active');
        dots[active].classList.add('active');
        numberIndicator.innerText = `0${active + 1}`;
    }

    nextButton.onclick = () => {
        active = (active + 1) % items.length;
        updateCarousel();
    };

    prevButton.onclick = () => {
        active = (active - 1 + items.length) % items.length;
        updateCarousel();
    };
});
