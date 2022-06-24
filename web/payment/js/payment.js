function showFields() {
    const fields = document.getElementById('payment-method-fields');
    fields.style.visibility = 'visible';
}

function addEventListeners() {

    const boletoButton = document.getElementById('boleto');
    const creditButton = document.getElementById('credit');
    const debitButton = document.getElementById('debit');

    boletoButton.addEventListener('click', ()=> {
        const fields = document.getElementById('payment-method-fields');
        fields.style.visibility = 'hidden';
    })

    creditButton.addEventListener('click', showFields);
    debitButton.addEventListener('click', showFields);

}


addEventListeners();