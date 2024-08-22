const imageItems = [];

// const image = new Image();
for(let i=1; i<15; i++){
    const image = document.createElement('img')
    image.classList.add("img-item");
    image.setAttribute('tabindex', '-1')
    image.src = `./assets/images/${i}.avif`
    imageItems.push(image);
    console.log(imageItems[i]);
}


const imageList = document.querySelector(".img-list");

imageItems.forEach(img => {
    imageList.append(img)
})


const slideEvent = () => {
    const slideButtons = document.querySelectorAll(".slide-btn");
    const itemsToMove = 3;
    
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sliderContainer = button.closest(".container1");  // Find the closest container
            const slideImage = sliderContainer.querySelector(".img-list");  // Get the image list in the container
            const itemWidth = slideImage.querySelector(".img-item, .card").clientWidth;
            const sliderScrollBar = sliderContainer.querySelector(".slider-scrollbar");
            const sliderThumb = sliderScrollBar.querySelector(".scrollbar-thumb");
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = itemWidth * itemsToMove * direction;
            const maxScrollLeft = slideImage.scrollWidth - slideImage.clientWidth;

            slideImage.scrollBy({ left: scrollAmount, behavior: "smooth" }); //scroll images with smooth transition

            if (direction == 1) {
                for (let i = 0; i < itemsToMove; i++) {
                    slideImage.append(slideImage.children[0]);
                }
            } else {
                for (let i = 0; i < itemsToMove; i++) {
                    slideImage.prepend(slideImage.children[slideImage.children.length - 1]);
                }
            }

            const updateScrollThumbPosition = () => {
                const scrollPosition = slideImage.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - sliderThumb.clientWidth);
                sliderThumb.style.transform = `translateX(${thumbPosition}px)`;
            };

            slideImage.addEventListener("scroll", () => {
                updateScrollThumbPosition();  //update the scroll thumb when the next and previous button is clicked
            });
        });
    });
};

slideEvent();
