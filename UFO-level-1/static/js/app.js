

// ========================================================================================
// Use d3 to point to the Table Body in the HTML File
// ========================================================================================

var tbody = d3.select("tbody");



// ========================================================================================
// Get natching records for the specified input 
// ========================================================================================

var getMatchingRecords = dt => {
    var dateCapture = new Date(dt);
    var records = []
    data.forEach(i => {
        var dateDataset = new Date(i.datetime);
        if ((dateDataset.getTime() === dateCapture.getTime()) || (dt === "")) {
            records.push(i);
        }
    });
    return records;
}


 
// ========================================================================================
// Update the table with the matching records 
// ========================================================================================

var updateTable = records => {
    tbody.html("");
    records.forEach(record => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


 
// ========================================================================================
// Use d3 to point to the button 
// ========================================================================================

var button = d3.select("#filter-btn");



// ========================================================================================
// Define what needs to happen when the Filter button is clicked 
// ========================================================================================


var handleInput = () => {

    d3.event.preventDefault();

    var dt = d3.select("#datetime").property("value");
    var records = getMatchingRecords(dt);
    updateTable(records);
}



// ============================================================================================================================
// Update the table with matching records when the Filter button is clicked after the criteria is specified by the user
// ============================================================================================================================

button.on("click", handleInput);


// ============================================================================================================================
// Update the table with the matchign records when the user hits the enter key after speciftign the criteria
// ============================================================================================================================

d3.select("form").on("submit", handleInput);