// Function for Salary Calculation
function calculateGrossSalary(basic) {

    let hra = basic * 0.20;

    let da = basic * 0.10;

    let gross = basic + hra + da;

    return {
        basic,
        hra,
        da,
        gross
    };
}

// Start Calculation
function startCalculation() {

    let basicSalary =
        document.getElementById("basicSalary").value;

    let error =
        document.getElementById("error");

    // Validation
    if (
        basicSalary === "" ||
        isNaN(basicSalary) ||
        basicSalary < 0
    ) {

        error.classList.remove("d-none");

        document.getElementById("resultCard")
            .classList.add("d-none");

        return;
    }

    // Hide Error
    error.classList.add("d-none");

    // Button Loading
    let button =
        document.getElementById("calculateBtn");

    let spinner =
        document.getElementById("spinner");

    let btnText =
        document.getElementById("btnText");

    button.disabled = true;

    spinner.classList.remove("d-none");

    btnText.innerHTML = "Calculating...";

    // Simulate Processing
    setTimeout(() => {

        let salary =
            calculateGrossSalary(
                Number(basicSalary)
            );

        // Currency Format
        function formatCurrency(amount) {

            return amount.toLocaleString(
                "en-IN",
                {
                    style: "currency",
                    currency: "INR"
                }
            );
        }

        // Show Results
        document.getElementById("resultCard")
            .classList.remove("d-none");

        document.getElementById("successMessage")
            .classList.remove("d-none");

        document.getElementById("basicResult")
            .innerHTML =
            `Basic Salary: ${formatCurrency(salary.basic)}`;

        document.getElementById("hraResult")
            .innerHTML =
            `HRA (20%): ${formatCurrency(salary.hra)}`;

        document.getElementById("daResult")
            .innerHTML =
            `DA (10%): ${formatCurrency(salary.da)}`;

        document.getElementById("grossResult")
            .innerHTML =
            `Gross Salary: ${formatCurrency(salary.gross)}`;

        // Reset Button State
        button.disabled = false;

        spinner.classList.add("d-none");

        btnText.innerHTML =
            "Calculate Gross Salary";

    }, 500);
}

// Reset Function
function resetForm() {

    document.getElementById("basicSalary").value = "";

    document.getElementById("error")
        .classList.add("d-none");

    document.getElementById("successMessage")
        .classList.add("d-none");

    document.getElementById("resultCard")
        .classList.add("d-none");
}