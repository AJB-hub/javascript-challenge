// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select(".btn-default");
var form = d3.select(".form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(event => event.datetime === inputValue);
    
    d3.select("tbody").html("");

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
};
  