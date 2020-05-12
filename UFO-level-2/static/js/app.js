// ========================================================================================
// Use d3 to point to the Table Body in the HTML File
// ========================================================================================

var tbody = d3.select("tbody");




// ========================================================================================
// Load the entire data table when the webpage is loaded
// ========================================================================================


data.forEach((record) => 
{
  var row = tbody.append("tr");
  Object.entries(record).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// ========================================================================================
// Use d3 to point to the Filters Section in the HTML File
// ========================================================================================

var filters = d3.select("#filters");



// ========================================================================================
// Declare a variable called labels which contain the filter fields in addition to date
// ========================================================================================

var labels = ["city","state","country","shape"];



// ========================================================================================
// Get matching records for the specified input 
// ========================================================================================

var gatherFilteredRecords = (dt,flts) => {
  var dateCapture = new Date(dt);
  var records = []
  data.forEach((i) => {
    var dateDataset = new Date(i.datetime);
      if (((dateDataset.getTime() === dateCapture.getTime()) || (dt === ""))
      && ((flts[0] === i.city.toLowerCase()) || (flts[0] === ""))
      && ((flts[1] === i.state.toLowerCase()) || (flts[1] === ""))
      && ((flts[2] === i.country.toLowerCase()) || (flts[2] === ""))
      && ((flts[3] === i.shape.toLowerCase()) || (flts[3] === ""))){
          records.push(i);
      }
  });
  return records;
}



// ========================================================================================
// Update the table with the matching records 
// ========================================================================================

var updateDataTable = records => {
  tbody.html("");

  records.forEach((record) => {
      var row = tbody.append("tr");
      Object.values(record).forEach(value => {
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
// Define what need to happen when the Filter button is clicked 
// ========================================================================================

var handleInput = () => {

  d3.event.preventDefault();

  var flts = labels.map(label =>{
      return d3.select(`#${label}`).property("value").toLowerCase();
  });

  var dt = d3.select("#datetime").property("value");
  
  var records = gatherFilteredRecords(dt,flts);
  updateDataTable(records);
}



// ============================================================================================================================
// Update the table with matching records when the Filter button is clicked after the criteria is specified by the user
// ============================================================================================================================

button.on("click", handleInput);


