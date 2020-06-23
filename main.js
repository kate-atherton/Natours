

const navigationLinks = [...document.querySelectorAll(".navigation__item")]
const popUpContent = document.querySelector(".popup__content")
const popUp = document.querySelector(".popup")
const closePopUp = document.querySelector(".popup__close")


const closeWindow = () => {
    document.getElementById("navi-toggle").checked = false;
}

navigationLinks.forEach(link => link.addEventListener("click", closeWindow))

document.addEventListener('click', (event) => {
    const isClickInside = popUpContent.contains(event.target);
  
    if (!isClickInside) {
        closePopUp.click();
    }
  });