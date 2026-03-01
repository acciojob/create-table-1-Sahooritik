function insert_Row() {
    // Get the table
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    var newRow = table.insertRow(0);

    // Insert two new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Add text to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}