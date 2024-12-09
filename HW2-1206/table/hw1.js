const salesData = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];

const tableBody = document.querySelector('#salesTable tbody');
const groupedSales = {};

salesData.forEach(entry => {
    if (!groupedSales[entry.region]) {
        groupedSales[entry.region] = [];
    }
    groupedSales[entry.region].push(entry);
});

for (const [region, records] of Object.entries(groupedSales)) {
    const totalSales = records.reduce((total, item) => total + item.sales, 0);

    tableBody.innerHTML += `
        <tr class="sum-row">
            <td>${region}</td>
            <td>Sum</td>
            <td>${totalSales}</td>
        </tr>
    `;

    records.forEach(record => {
        tableBody.innerHTML += `
            <tr>
                <td>${region}</td>
                <td>${record.model}</td>
                <td>${record.sales}</td>
            </tr>
        `;
    });
}