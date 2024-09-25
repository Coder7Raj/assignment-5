document.getElementById("donation-btn-two").addEventListener("click", () => {
  const mainBalance = document.getElementById("main-balance");
  const noakhaliDonations = document.getElementById("donation-for-feni");
  const inputDonationAmount = parseFloat(
    document.getElementById("input-donation-for-feni").value
  );

  if (
    isNaN(inputDonationAmount) ||
    inputDonationAmount <= 0 ||
    typeof inputDonationAmount === "string"
  ) {
    alert("Please enter a valid donation amount!");
    return;
  }
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
  alert(`Successfully donated ${inputDonationAmount} Taka for Feni.`);

  //
  //
  const historyItem = document.createElement("div");
  historyItem.className =
    "w-full p-3 border border-gray-300 shadow-md rounded-lg";
  historyItem.innerHTML = `
  <p class='text-2xl text-[#111111] font-bold'>${inputDonationAmount.toFixed(
    2
  )} Taka is Donated for Flood Relief in Feni,Bangladesh <br><br> </p>
      <p class='text-xl text-gray-500 font-semibold'> 
       Date & Time: ${new Date().toString()} </p>
  `;

  const historylist = document.getElementById("history-list");
  historylist.insertBefore(historyItem, historylist.firstChild);
});
