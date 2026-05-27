const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

const result = document.getElementById("result");


// All Currency + Country Codes
const countryList = {

    USD: "US",
    INR: "IN",
    EUR: "FR",
    GBP: "GB",
    AUD: "AU",
    CAD: "CA",
    JPY: "JP",
    CNY: "CN",
    RUB: "RU",
    BRL: "BR",
    AED: "AE",
    PKR: "PK",
    BDT: "BD",
    LKR: "LK",
    SAR: "SA",
    NPR: "NP"

};


// Add currencies in dropdown
for (let code in countryList) {

    // From Dropdown
    let option1 = document.createElement("option");

    option1.value = code;
    option1.innerText = code;

    if (code === "USD") {
        option1.selected = true;
    }

    fromCurrency.appendChild(option1);


    // To Dropdown
    let option2 = document.createElement("option");

    option2.value = code;
    option2.innerText = code;

    if (code === "INR") {
        option2.selected = true;
    }

    toCurrency.appendChild(option2);

}


// Update Flags
function updateFlag(element, flagImage) {

    let currencyCode = element.value;

    let countryCode = countryList[currencyCode];

    flagImage.src =
        `https://flagsapi.com/${countryCode}/flat/64.png`;

}


// Dropdown Change Events
fromCurrency.addEventListener("change", () => {
    updateFlag(fromCurrency, fromFlag);
});

toCurrency.addEventListener("change", () => {
    updateFlag(toCurrency, toFlag);
});


// Convert Currency Function
async function convertCurrency() {

    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        amount = 1;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    // FREE API
    const URL =
        `https://api.exchangerate-api.com/v4/latest/${from}`;

    try {

        const response = await fetch(URL);

        const data = await response.json();

        console.log(data);

        // Get Rate
        let rate = data.rates[to];

        // Final Amount
        let finalAmount = (amount * rate).toFixed(2);

        // Show Result
        result.innerText =
            `${amount} ${from} = ${finalAmount} ${to}`;

    }

    catch (error) {

        console.log(error);

        result.innerText = "Something went wrong";

    }

}


// Button Click Event
document.getElementById("convertBtn")
    .addEventListener("click", convertCurrency);


// Default Convert on Page Load
convertCurrency();