const imageItems = [];

for (let i = 1; i < 15; i++) {
    const image = document.createElement('img');
    image.classList.add("img-item");
    image.setAttribute('tabindex', '-1');
    image.src = `./assets/images/${i}.avif`;
    imageItems.push(image);
}

const imageList = document.querySelector(".container1 .img-list");
imageItems.forEach(img => {
    imageList.append(img);
});

const initializeCarousel = (carouselContainer) => {
    const imageList = carouselContainer.querySelector(".img-list");

    const slideEvent = () => {
        const slideButtons = carouselContainer.querySelectorAll(".slide-btn");
        const itemsToMove = 3;

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const slideImage = carouselContainer.querySelector(".img-list");
                const itemWidth = slideImage.querySelector(".img-item, .card").clientWidth;
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = itemWidth * itemsToMove * direction;

                slideImage.scrollBy({ left: scrollAmount, behavior: "smooth" });
                if (direction === 1) {
                    for (let i = 0; i < itemsToMove; i++) {
                        slideImage.append(slideImage.children[0]);
                    }
                } else {
                    for (let i = 0; i < itemsToMove; i++) {
                        slideImage.prepend(slideImage.children[slideImage.children.length - 1]);
                    }
                }
            });
        });
    };

    slideEvent();
};

const containerList = document.querySelectorAll('.container1')
containerList.forEach(carousel => {
    initializeCarousel(carousel);
});
