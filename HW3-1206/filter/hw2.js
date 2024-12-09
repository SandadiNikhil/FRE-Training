const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

const tableBody = document.getElementById('salesTableBody');

function displayTable(data) {
    tableBody.innerHTML = data.map(item =>
        `<tr>
            <td>${item.region}</td>
            <td>${item.model}</td>
            <td>${item.sales}</td>
        </tr>`
    ).join('');
}

function filterTable() {
    const regionFilter = document.getElementById('regionFilter').value;
    const modelFilter = document.getElementById('modelFilter').value;

    const filteredData = data.reduce((acc, item) => {
        if ((regionFilter === 'all' || item.region === regionFilter) &&
            (modelFilter === 'all' || item.model === modelFilter)) {
            acc.push(item);
        }
        return acc;
    }, []);


    displayTable(filteredData);
}

document.getElementById('regionFilter').addEventListener('change', filterTable);
document.getElementById('modelFilter').addEventListener('change', filterTable);

displayTable(data);