//scroll reveal from bottom -> top
export const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let element_top = reveals[i].getBoundingClientRect().top;
    var element_visible = 150;

    if (element_top < windowHeight - element_visible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", reveal);

//scroll reveal from left -> right
export const revealX = () => {
  let reveals = document.querySelectorAll(".reveal_x");
  for (let y = 0; y < reveals.length; y++) {
    let windowHeight = window.innerHeight;
    let element_top = reveals[y].getBoundingClientRect().top;
    var element_visible = 150;

    if (element_top < windowHeight - element_visible) {
      reveals[y].classList.add("active_x");
    } else {
      reveals[y].classList.remove("active_x");
    }
  }
};
window.addEventListener("scroll", revealX);

//scroll move from left -> right
export const moveR = () => {
  let reveals = document.querySelectorAll(".move_r");
  for (let y = 0; y < reveals.length; y++) {
    let windowHeight = window.innerHeight;
    let element_top = reveals[y].getBoundingClientRect().top;
    var element_visible = 100;

    if (element_top < windowHeight - element_visible) {
      reveals[y].classList.add("active");
    } else {
      reveals[y].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", moveR);

//scroll move from right -> left
export const moveL = () => {
  let reveals = document.querySelectorAll(".move_l");
  for (let y = 0; y < reveals.length; y++) {
    let windowHeight = window.innerHeight;
    let element_top = reveals[y].getBoundingClientRect().top;
    var element_visible = 100;

    if (element_top < windowHeight - element_visible) {
      reveals[y].classList.add("active");
    } else {
      reveals[y].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", moveL);
