function calculateBill() {

    let km = document.getElementById("kilometers").value;

    let error = document.getElementById("error");

    // Validation
    if (km === "" || isNaN(km) || km < 0) {

        error.classList.remove("d-none");

        document.getElementById("resultCard")
            .classList.add("d-none");

        return;
    }

    // Hide Error
    error.classList.add("d-none");

    km = Number(km);

    let remainingKm = km;

    let slab1Km = 0;
    let slab2Km = 0;
    let slab3Km = 0;

    let slab1Cost = 0;
    let slab2Cost = 0;
    let slab3Cost = 0;

    // First 10 KM = Rs.11
    slab1Km = Math.min(remainingKm, 10);

    slab1Cost = slab1Km * 11;

    remainingKm -= slab1Km;

    // Next 40 KM = Rs.10
    if (remainingKm > 0) {

        slab2Km = Math.min(remainingKm, 40);

        slab2Cost = slab2Km * 10;

        remainingKm -= slab2Km;
    }

    // Above 50 KM = Rs.9
    if (remainingKm > 0) {

        slab3Km = remainingKm;

        slab3Cost = slab3Km * 9;
    }

    // Total
    let total =
        slab1Cost +
        slab2Cost +
        slab3Cost;

    // Format Numbers
    let formattedTotal = total.toLocaleString(
        "en-IN",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

    // Show Result Card
    document.getElementById("resultCard")
        .classList.remove("d-none");

    // Display Results
    document.getElementById("totalBill").innerHTML =
        `Total Bill = Rs. ${formattedTotal}`;

    document.getElementById("slab1").innerHTML =
        `${slab1Km} km × Rs.11 = Rs.${slab1Cost.toFixed(2)}`;

    document.getElementById("slab2").innerHTML =
        `${slab2Km} km × Rs.10 = Rs.${slab2Cost.toFixed(2)}`;

    document.getElementById("slab3").innerHTML =
        `${slab3Km} km × Rs.9 = Rs.${slab3Cost.toFixed(2)}`;
}
function resetBill() {

    // Clear Input
    document.getElementById("kilometers").value = "";

    // Hide Error
    document.getElementById("error")
        .classList.add("d-none");

    // Hide Result Card
    document.getElementById("resultCard")
        .classList.add("d-none");
}