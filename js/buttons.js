document.addEventListener("DOMContentLoaded", function () {
  const addBg = document.getElementById("donation-home-btn");
  const addBgTwo = document.getElementById("history-btn");

  addBg.addEventListener("click", function () {
    addBg.classList.add("text-black", "bg-lime-400", "px-4", "py-2");
    addBgTwo.classList.remove("text-black", "bg-lime-400", "px-4", "py-2");
  });

  addBgTwo.addEventListener("click", function () {
    addBgTwo.classList.add("text-black", "bg-lime-400", "px-4", "py-2");
    addBg.classList.remove("text-black", "bg-lime-400", "px-4", "py-2");
    addBg.classList.add("bg-hide", "bg-add");
  });
});
