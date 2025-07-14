document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('seach');
  const searchButton = document.getElementById('seach-button');
  const mainTable = document.getElementById('table_fixa');
  const mainTableBody = mainTable ? mainTable.querySelector('tbody') : null;
  const button = document.getElementById('calendar-button');
  const container = document.getElementById('calendar');

  const initialMainTableRows = mainTableBody ? Array.from(mainTableBody.querySelectorAll('tr')) : [];

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!mainTableBody) return;

    mainTableBody.innerHTML = '';

    initialMainTableRows.forEach(row => {
      if (row.classList.contains('additional-info')) {
        row.classList.add('hidden');
        return;
      }

      let rowMatches = false;
      const cells = row.querySelectorAll('td');

      cells.forEach(cell => {
        if (cell.textContent.toLowerCase().includes(searchTerm)) {
          rowMatches = true;
        }
      });

      if (rowMatches) {
        mainTableBody.appendChild(row);
        const personId = row.dataset.id;
        const additionalInfoRow = initialMainTableRows.find(item => item.dataset.personId === personId);
        if (additionalInfoRow) {
          additionalInfoRow.classList.add('hidden');
          mainTableBody.appendChild(additionalInfoRow);
        }
      }
    });

    const visiblePersonRows = mainTableBody.querySelectorAll('tr.person-row');
    if (visiblePersonRows.length === 0 && searchTerm.length > 0) {
      const noResultsRow = document.createElement('tr');
      const noResultsCell = document.createElement('td');
      noResultsCell.colSpan = 3;
      noResultsCell.textContent = 'Nenhum resultado encontrado.';
      noResultsCell.style.textAlign = 'center';
      noResultsCell.style.padding = '10px';
      noResultsRow.appendChild(noResultsCell);
      mainTableBody.appendChild(noResultsRow);
    }

    if (searchTerm.length === 0) {
      mainTableBody.innerHTML = '';
      initialMainTableRows.forEach(row => {
        if (row.classList.contains('additional-info')) {
          row.classList.add('hidden');
        }
        mainTableBody.appendChild(row);
      });
    }
  }

  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }
  if (searchInput) {
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        performSearch();
        event.preventDefault();
      }
    });
  }

  // Botões "+" fora da tabela
  document.querySelectorAll('.expand-buttons .toggle-details-button').forEach(button => {
    button.addEventListener('click', () => {
      const personId = button.getAttribute('data-target');
      const row = document.querySelector(`tr[data-person-id="${personId}"]`);

      if (row) {
        row.classList.toggle('hidden');
        const symbol = row.classList.contains('hidden') ? '+' : '−';
        button.textContent = symbol;
      }
    });
  });

 if (button && container) {
  button.addEventListener('click', () => {
    container.classList.toggle('hidden');
  });
}

});

