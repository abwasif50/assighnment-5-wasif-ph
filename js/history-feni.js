document.addEventListener("DOMContentLoaded", () => {
    const donateButton = document.querySelector("#btn-add-money"); 
    const historyButton = document.querySelector("#history-id"); 
    const donationInput = document.querySelector("#input-add-money"); 
    const donatedAmountDisplay = document.querySelector("#balance-added-noakhali,#balance-added-quota,balance-added-feni");
    const totalAmountDisplay = document.querySelector("#balance");
    const historyContainer = document.querySelector("#Section-history"); 

    let totalAmount = 8000; 
    const donationHistory = []; 
   
   donateButton.addEventListener("click", () => {
    const donation = parseFloat(donationInput.value);

    if (isNaN(donation) || donation <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }


    donatedAmountDisplay.textContent = `${donation}`;

    
    totalAmount += donation;
    totalAmountDisplay.textContent = `${totalAmount}`;


    const now = new Date();
    donationHistory.push({
        amount: donation,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
    });


    donationInput.value = "";
});

// Event listener for "History" button///
historyButton.addEventListener("click", () => {
    historyContainer.innerHTML = "<h3>Donation History</h3>";

    if (donationHistory.length === 0) {
        historyContainer.innerHTML += "<p>No donations yet.</p>";
    } else {
        donationHistory.forEach((entry, index) => {
            const historyEntry = document.createElement("div");
            historyEntry.classList.add("history-entry");
            historyEntry.textContent =` #
            ${index + 1}: Donated: ${entry.amount}BDT | Date: ${entry.date} | Time: ${entry.time}`;
            historyContainer.appendChild(historyEntry);
        });
    }
});
});

