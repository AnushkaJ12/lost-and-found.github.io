// Arrays to store Lost and Found items separately
let lostItems = [];
let foundItems = [];

// Handle Lost Form Submission
document.getElementById('lostForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let lostItem = {
        itemName: document.getElementById('lostItemName').value,
        itemType: document.getElementById('lostItemType').value,
        itemColor: document.getElementById('lostItemColor').value,
        date: document.getElementById('lostDate').value,
        location: document.getElementById('lostLocation').value
    };

    // Add the lost item to the lostItems array
    lostItems.push(lostItem);

    // Update the Lost Items Table
    updateLostItemsTable();
    this.reset();
});

// Handle Found Form Submission
document.getElementById('foundForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let foundItem = {
        itemName: document.getElementById('foundItemName').value,
        itemType: document.getElementById('foundItemType').value,
        itemColor: document.getElementById('foundItemColor').value,
        date: document.getElementById('foundDate').value,
        location: document.getElementById('foundLocation').value
    };

    // Add the found item to the foundItems array
    foundItems.push(foundItem);

    // Update the Found Items Table
    updateFoundItemsTable();
    this.reset();
});

// Function to update Lost Items Table
function updateLostItemsTable() {
    let tableBody = document.querySelector('#lostItemsTable tbody');
    tableBody.innerHTML = '';

    lostItems.forEach(function (item) {
        let row = `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.itemType}</td>
                <td>${item.itemColor}</td>
                <td>${item.date}</td>
                <td>${item.location}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to update Found Items Table
function updateFoundItemsTable() {
    let tableBody = document.querySelector('#foundItemsTable tbody');
    tableBody.innerHTML = '';

    foundItems.forEach(function (item) {
        let row = `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.itemType}</td>
                <td>${item.itemColor}</td>
                <td>${item.date}</td>
                <td>${item.location}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
