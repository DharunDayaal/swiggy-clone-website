const slideEvent = () => {
    const slideImage = document.querySelector(".slider .img-list");
    const slideButtons = document.querySelectorAll(".slide-btn");
    const itemsToMove = 3;
    const itemWidth = slideImage.querySelector(".img-item").clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = itemWidth * itemsToMove * direction;
            slideImage.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
};

slideEvent();
