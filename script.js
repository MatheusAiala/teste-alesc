document.addEventListener('DOMContentLoaded', () => {

const searchInput = document.getElementById('seach');
const seachButton = document.getElementById('seach-button');

consttableBody = minhatale ? minhatale.querySelector('tbody') : null;

const initialTableRows = tableBody ? Array.from(tableBody.querySelectorAll('tr')) : [];

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
});

function performSearch(){
    const seachTerm = seachInput.value.toLowerCase().trim()

    tableRows.forEach(roe =>{
        let rowMatches = false;
        const cells = row.querySelectorAll('td');

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(seachTerm)) {
                rowMatches = true;
            }
        });

        if (rowMatchs) {
            row.style.display = '';
        }else {
            row.style.display = 'none'
        }
    });
}

if (seachButton) {
    searchButtom.addEventListener('click', performSearch); 
}

if (searchInput) {
    searchInputaddEventListener('keypress', function(event) {
        if (event.key === "enter") {
            performSearch();
        }
    });
}