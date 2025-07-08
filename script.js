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