// ========================================================================================
// Use d3 to point to the Table Body in the HTML File
// ========================================================================================

var tbody = d3.select("tbody");



// ========================================================================================
// Use d3 to point to the Filters Section in the HTML File
// ========================================================================================

var filters = d3.select("#filters");



// ========================================================================================
// declare a variable called labels which contain the filter fields in addition to date
// ========================================================================================

var labels = ["city","state","country","shape"];



// ========================================================================================
// Get natching records for the specified input 
// ========================================================================================

var getMatchingRecords = (dt,flts) => {
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

var updateTable = records => {
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
  
  var records = getMatchingRecords(dt,flts);
  updateTable(records);
}



// ============================================================================================================================
// Update the table with matching records when the Filter button is clicked after the criteria is specified by the user
// ============================================================================================================================

button.on("click", handleInput);


