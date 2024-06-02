const bankSelect = document.getElementById("bank");
const stavkaSpan = document.getElementById("stavka");

let annualInterestRate = 0;

// Задаем ставку при загрузке страницы для выбранного банка
updateInterestRate();
calculatePayment(); // Вызываем функцию для расчета платежа

bankSelect.addEventListener("change", function () {
    updateInterestRate();
    calculatePayment();
});

function updateInterestRate() {
    const bank = bankSelect.value;
    if (bank === "progress") {
        stavkaSpan.innerHTML = "Процентная ставка 10.25% годовых";
        annualInterestRate = 0.1025;
    } else if (bank === "fortuna") {
        stavkaSpan.innerHTML = "Процентная ставка 15.25% годовых";
        annualInterestRate = 0.1525;
    }
}

function calculatePayment() {
    document.getElementById("everymonth-pay").style.display = "none";
    document.getElementById("result").innerHTML = "";
    const depositWarning = document.getElementById("depositWarning");
    depositWarning.innerHTML = "";

    const deposit = parseFloat(document.getElementById("deposit").value) * 1000;
    const loanTerm = parseInt(document.getElementById("loanTerm").value);
    const apartmentCost = parseFloat(document.getElementById("apartmentCost").value) * 1000;

    if (deposit >= 100000 && 31 > loanTerm > 0 && apartmentCost >= 300000 && apartmentCost > deposit) 
    {
        const bank = bankSelect.value;


        if (bank === "progress") {
            if (deposit < apartmentCost * 0.6) {
                depositWarning.innerHTML = "Первоначальный взнос должен быть не менее 60% от стоимости недвижимости";
                return;
            }
             
            // 10.25% для ПрогрессБанка
        } else if (bank === "fortuna") {
            if (deposit < apartmentCost * 0.3) {
                depositWarning.innerHTML = "Первоначальный взнос должен быть не менее 30% от стоимости недвижимости";
                return;
            }
            // annualInterestRate = 0.1525; 
            // 15.25% для ФортунаБанка
        }
            document.getElementById("everymonth-pay").style.display = "block";

            const loanAmount = apartmentCost - deposit;
            const monthlyInterestRate = annualInterestRate / 12;
            const months = loanTerm * 12;

            const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            document.getElementById("result").innerHTML = `${monthlyPayment.toFixed(2)} руб`;
    }
}

document.getElementById("deposit").addEventListener("input", calculatePayment);
document.getElementById("loanTerm").addEventListener("input", calculatePayment);
document.getElementById("apartmentCost").addEventListener("input", calculatePayment);
