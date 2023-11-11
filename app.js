const items = [...document.querySelectorAll(".point")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}K`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}K`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});
// fixed 
window.onscroll = function () {
  var navbar = document.querySelector(".nav");
  if (window.pageYOffset > 100) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
};
