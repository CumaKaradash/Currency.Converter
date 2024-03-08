const apiKey = '43d1e643dab1d6359ec065bc';

async function getExchangeRates() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        if (!response.ok) {
            throw new Error('Döviz kurları alınamadı.');
        }
        const data = await response.json();
        return data.conversion_rates;
    } catch (error) {
        console.error('API hatası:', error.message);
        alert('Döviz kurları alınamadı. Lütfen daha sonra tekrar deneyin.');
    }
}

async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        alert('Lütfen geçerli bir miktar ve para birimi seçin.');
        return;
    }

    const rates = await getExchangeRates();

    if (!rates || !rates[fromCurrency] || !rates[toCurrency]) {
        alert('Geçerli bir para birimi seçin.');
        return;
    }

    const result = (amount / rates[fromCurrency]) * rates[toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

async function populateCurrencyDropdowns() {
    const rates = await getExchangeRates();
    if (!rates) {
        return;
    }

    const currencies = Object.keys(rates);

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.text = currency;
        fromCurrencySelect.add(option);

        const option2 = document.createElement('option');
        option2.text = currency;
        toCurrencySelect.add(option2);
    });
}

populateCurrencyDropdowns();


