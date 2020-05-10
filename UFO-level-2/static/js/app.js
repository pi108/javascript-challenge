// Define a variable for the data in data.js
var tableData = data;
console.log(tableData);

// Use d3 to point to the table body
var tbody = d3.select("tbody");




// ========================================================================================
// LOAD THE DATA INTO A TABLE
// ========================================================================================

// Use the forEach feature to go through every ufo sighting in the provided datamn
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // For each ufo sighting, append one table row `tr` to the table body
    var row = tbody.append("tr");

    // Use the `Object.entries` feature to get the keys and values for each ufo sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // For each row, append a cell ("td") for every column and populate teh cell with the value
      var cell = row.append("td");
      cell.text(value);
    });
  });




// ========================================================================================
// CAPTURE THE INPUT ELEMENT AND VALUE SPECIFIED IN THE SEARCH CRITERIA
// ========================================================================================

// Define a variable and use d3 to point to the button section of the HTML file
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Define a variable and use d3 to point to the input element
    var inputElement = d3.select("#input");
    // Define a variable to get the input value 
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter for the data that matches the input value 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);




// ========================================================================================
// RETURN THE ROWS THAT MATCH THE INPUT ELEMENT AND VALUE SPECIFIED IN THE SEARCH CRITERIA
// ========================================================================================    

    // Use the forEach feature to go through all the rows that match the selected filter criteria  
    filteredData.forEach(function(selections) {   
    console.log(selections);
    // For each selection, append one table row `tr` to the table body
    var row = tbody.append("tr");
    // Use the `Object.entries` feature to get the keys and values for each selection
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // For each row, append a cell ("td") for every column and populate the cell with the value
        var cell = row.append("td");
        cell.text(value);
    });
});
});

