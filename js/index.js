function checkWidth() {
  let textElement = document.getElementById("hide-text");
  if (window.innerWidth <= 425) {
    textElement.classList.add("hide");
  } else {
    textElement.classList.remove("hide");
  }
}
checkWidth();
window.addEventListener("resize", checkWidth);

//
//
// ...............home page file execution..............
let goToBlog = document.getElementById("goToBlogFile");
goToBlog.addEventListener("click", () => {
  window.location.href = "blog.html";
});

// go to history page
const goToHistory = document.getElementById("history-btn");
goToHistory.addEventListener("click", () => {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("show-for-home").classList.add("hidden");
});

// go to home page
const goToHome = document.getElementById("donation-home-btn");
goToHome.addEventListener("click", () => {
  document.getElementById("home-page").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("show-for-home").classList.remove("hidden");
});

//
//
// donating
document.getElementById("donation-btn").addEventListener("click", () => {
  const mainBalance = document.getElementById("main-balance");
  const noakhaliDonations = document.getElementById("donations-of-noakhali");
  const inputDonationAmount = parseFloat(
    document.getElementById("input-donation-amount").value
  );

  //
  let mainAccountBalance = parseFloat(mainBalance.innerText) || 0;
  let currentDonateAmount = parseFloat(noakhaliDonations.innerText) || 0;

  if (mainAccountBalance < inputDonationAmount) {
    alert("Insufficient balance.");
    return;
  }

  let leftMoneys = mainAccountBalance - inputDonationAmount;
  let addedMoneys = currentDonateAmount + inputDonationAmount;

  mainBalance.innerText = `${leftMoneys.toFixed(2)} BDT`;
  noakhaliDonations.innerText = `${addedMoneys.toFixed(2)} BDT`;

  //
  //
  const historyItem = document.createElement("div");
  historyItem.className =
    "w-full p-3 border border-gray-300 shadow-md rounded-lg";
  historyItem.innerHTML = `
  <p class='text-2xl text-[#111111] font-bold'>${inputDonationAmount.toFixed(
    2
  )} Taka is donated for flood at Noakhali, Bangladesh <br><br> </p>
      <p class='text-xl text-gray-500 font-semibold'>
       Date & Time: ${new Date().toString()} </p>
  `;

  const historylist = document.getElementById("history-list");
  historylist.insertBefore(historyItem, historylist.firstChild);
});
