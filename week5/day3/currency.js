const apiKey = "94c83e6b20158839078a2588"; // ← remplace avec ta clé API
const baseUrl = "https://v6.exchangerate-api.com/v6";

const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const switchBtn = document.getElementById("switch");
const resultDiv = document.getElementById("result");

// Charger les devises au chargement de la page
async function loadCurrencies() {
  try {
    const res = await fetch(`${baseUrl}/${apiKey}/codes`);
    const data = await res.json();
    data.supported_codes.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromSelect.add(option1);
      toSelect.add(option2);
    });

    fromSelect.value = "USD";
    toSelect.value = "EUR";

  } catch (err) {
    resultDiv.textContent = "❌ Failed to load currencies.";
  }
}

loadCurrencies();

// Convertir la devise
async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;

  if (!amount || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const res = await fetch(`${baseUrl}/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await res.json();
    resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
  } catch (err) {
    resultDiv.textContent = "❌ Conversion failed.";
  }
}

convertBtn.addEventListener("click", convertCurrency);

// Bonus : Inverser les devises
switchBtn.addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
});
