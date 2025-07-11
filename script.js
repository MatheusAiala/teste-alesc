const button = document.getElementById('toggleButton');
const table = document.getElementById('minha_table');

button.addEventListener('click', () => {
table.classList.toggle('hidden');


if (table.classList.contains('hidden')) {
button.textContent = '+';
}else{
    button.textContent = '-';
}

});

const searchInput = document.getElementById('seach');
const seachButton = document.getElementById('seach-button');

consttableBody = minhatale ? minhatale.querySelector('tbody') : null;

const initialTableRows = tableBody ? Array.from(tableBody.querySelectorAll('tr')) : [];