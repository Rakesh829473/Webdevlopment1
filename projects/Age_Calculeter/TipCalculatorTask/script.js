function calculateTip() {

    let billAmount = document.getElementById("billAmount").value;
    let service = document.getElementById("service").value;
    let people = document.getElementById("people").value;

    // Validation
    if (billAmount === "" || people === "" || people <= 0) {
        alert("Please enter valid details");
        return;
    }

    // Convert Number
    billAmount = Number(billAmount);
    service = Number(service);
    people = Number(people);

    // Tip
    let tip = billAmount * service;

    // Total Bill
    let totalBill = billAmount + tip;

    // Per Person
    let perPerson = tip / people;

    // Show Result Box After Button Click
    document.getElementById("resultBox").classList.remove("d-none");

    // Show Data
    document.getElementById("tipAmount").innerHTML =
        "₹" + tip.toFixed(2);

    document.getElementById("perPerson").innerHTML =
        "₹" + perPerson.toFixed(2);

    // document.getElementById("totalAmount").innerHTML =
    //     "₹" + totalBill.toFixed(2);
}