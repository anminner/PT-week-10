// Function for form submission

document.getElementById("addSneakerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const sneakerModel = document.getElementById("sneakerModel").value;
    const sneakerTableBody = document.getElementById("sneakerTableBody");

    // Create new row for table

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${sneakerModel}</td>
        <td>0</td>
    `;
    sneakerTableBody.appendChild(newRow);

    // Clear input field
    document.getElementById("sneakerModel").value = "";
});

