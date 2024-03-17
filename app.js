
//Parse Button
function parsButtonOnClick() {
    document.getElementById("buttonText").textContent = 'This is dynamically added text';
}

//Builds the table 
document.addEventListener('DOMContentLoaded', function () {
    //Hardcoded Table 
    const tableData = [
        { state: '0', id: 'S5', plus: '', star: '', openParen: 'S4', closeParen: '', dollar: '', space: '', E: '1', T: '2', F: '3' },
        { state: '1', id: '', plus: 'S6', star: '', openParen: '', closeParen: '', dollar: 'accept', space: '', E: '', T: '', F: '' },
        { state: '2', id: '', plus: 'R2', star: 'S7', openParen: '', closeParen: 'R2', dollar: 'R2', space: '', E: '', T: '', F: '' },
        { state: '3', id: '', plus: 'R4', star: 'R4', openParen: '', closeParen: 'R4', dollar: 'R4', space: '', E: '', T: '', F: '' },
        { state: '4', id: 'S5', plus: '', star: '', openParen: 'S4', closeParen: '', dollar: '', space: '', E: '8', T: '2', F: '3' }
    ];

    const parserTable = document.getElementById('parser-table');

    // Create table element
    const table = document.createElement('table');
    table.className = 'styled-table';

    // Create and append thead
    const thead = document.createElement('thead');
    table.appendChild(thead);

    //Empty Header Box
    const headerRow1 = document.createElement('tr');
    const actionHeaderCell = document.createElement('th');
    actionHeaderCell.colSpan = '1';
    actionHeaderCell.innerText = '';
    headerRow1.appendChild(actionHeaderCell);

    //Action Header 
    const gotoHeaderCell = document.createElement('th');
    gotoHeaderCell.colSpan = '7';
    gotoHeaderCell.innerText = 'Action';
    gotoHeaderCell.scope = 'colgroup';
    headerRow1.appendChild(gotoHeaderCell);

    //Goto Header
    const gotoHeaderCell2 = document.createElement('th');
    gotoHeaderCell2.colSpan = '3';
    gotoHeaderCell2.innerText = 'Goto';
    gotoHeaderCell2.scope = 'colgroup';
    headerRow1.appendChild(gotoHeaderCell2);

    thead.appendChild(headerRow1);

    //Creates 2nd Header
    const headerRow2 = document.createElement('tr');
    const headers = ['State', 'id', '+', '*', '(', ')', '$', ' ', 'E', 'T', 'F'];

    headers.forEach(headerText => {
        const cell = document.createElement('th');
        if (headerText === 'State') cell.scope = 'row';

        cell.innerText = headerText;
        headerRow2.appendChild(cell);
    });
    thead.appendChild(headerRow2);

    // Create and append tbody
    const tbody = document.createElement('tbody');
    tableData.forEach(rowData => {
        const row = document.createElement('tr');

        // Create and append cells based on rowData
        Object.entries(rowData).forEach(([key, value]) => {
            const cell = document.createElement(key === 'state' ? 'th' : 'td');
            if (key === 'state') cell.scope = 'row';
            cell.innerText = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append table to the parserTable div
    parserTable.appendChild(table);
});
