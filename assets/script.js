const slideEvent = () => {
    const slideButtons = document.querySelectorAll(".slide-btn");
    const itemsToMove = 3;
    
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sliderContainer = button.closest(".container1");          //to find the closest container when there are more numbr of same containers
            const slideImage = sliderContainer.querySelector(".img-list");  //it can be reused for many number of carousels
            const itemWidth = slideImage.querySelector(".img-item, .card").clientWidth;
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = itemWidth * itemsToMove * direction;
            slideImage.scrollBy({left: scrollAmount, behavior: "smooth"});

            if(direction == 1){
                for (let i = 0; i < itemsToMove; i++) {
                    slideImage.append(slideImage.children[0])  
                }
            }
            else {
                for (let i = 0; i < array.length; i++) {
                    slideImage.prepend(slideImage.children[slideImage.children.length - 1])
                }
            }
        });
    });
};

slideEvent();
