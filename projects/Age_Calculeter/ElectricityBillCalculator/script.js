function calculateBill() {

    let units = document.getElementById("units").value;

    // Validation
    if (units === "" || units < 0) {

        alert("Please enter valid units");

        return;
    }

    units = Number(units);

    let remainingUnits = units;

    let slab1Units = 0;
    let slab2Units = 0;
    let slab3Units = 0;
    let slab4Units = 0;

    let slab1Charge = 0;
    let slab2Charge = 0;
    let slab3Charge = 0;
    let slab4Charge = 0;

    // First 50 Units
    if (remainingUnits > 0) {

        slab1Units = Math.min(remainingUnits, 50);

        slab1Charge = slab1Units * 0.50;

        remainingUnits -= slab1Units;
    }

    // Next 150 Units
    if (remainingUnits > 0) {

        slab2Units = Math.min(remainingUnits, 150);

        slab2Charge = slab2Units * 0.75;

        remainingUnits -= slab2Units;
    }

    // Next 250 Units
    if (remainingUnits > 0) {

        slab3Units = Math.min(remainingUnits, 250);

        slab3Charge = slab3Units * 1.20;

        remainingUnits -= slab3Units;
    }

    // Above 450 Units
    if (remainingUnits > 0) {

        slab4Units = remainingUnits;

        slab4Charge = slab4Units * 1.50;
    }

    // Subtotal
    let subtotal =
        slab1Charge +
        slab2Charge +
        slab3Charge +
        slab4Charge;

    // Surcharge
    let surcharge = subtotal * 0.20;

    // Grand Total
    let grandTotal = subtotal + surcharge;

    // Show Result Card
    document.getElementById("resultCard")
        .classList.remove("d-none");

    // Display Result
    document.getElementById("slab1").innerHTML =
        `First 50 Units: ${slab1Units} × ₹0.50 = ₹${slab1Charge.toFixed(2)}`;

    document.getElementById("slab2").innerHTML =
        `Next 150 Units: ${slab2Units} × ₹0.75 = ₹${slab2Charge.toFixed(2)}`;

    document.getElementById("slab3").innerHTML =
        `Next 250 Units: ${slab3Units} × ₹1.20 = ₹${slab3Charge.toFixed(2)}`;

    document.getElementById("slab4").innerHTML =
        `Above 450 Units: ${slab4Units} × ₹1.50 = ₹${slab4Charge.toFixed(2)}`;

    document.getElementById("subtotal").innerHTML =
        `Subtotal: ₹${subtotal.toFixed(2)}`;

    document.getElementById("surcharge").innerHTML =
        `20% Surcharge: ₹${surcharge.toFixed(2)}`;

    document.getElementById("grandTotal").innerHTML =
        `Grand Total: ₹${grandTotal.toFixed(2)}`;
}

// Reset Function
function resetBill() {

    document.getElementById("units").value = "";

    document.getElementById("resultCard")
        .classList.add("d-none");
}