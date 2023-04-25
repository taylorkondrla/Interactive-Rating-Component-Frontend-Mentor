const submitBtn = document.querySelector(".submit");
const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");
const numberSelector = document.querySelectorAll(".item");
const selectText = document.querySelector(".selection-text");

let clicked = null;

submitBtn.addEventListener("click", function () {
    if (clicked) {
        secondContainer.classList.remove("hidden");
        firstContainer.classList.add("hidden");
    }
    clicked = null; // Reset clicked variable
});

numberSelector.forEach((button) => {
    button.addEventListener("click", function () {
        clicked = button.textContent;
        selectText.textContent = `You selected ${button.textContent} out of 5`;
    });
});    
