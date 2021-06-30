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

//mindate function
// function minDate() {
//   let datetimeData = tableData.forEach(ufoReport => Date.parse(ufoReport.datetime))
//   return Math.min(datetimeData)
// }

//maxdate function
// function maxDate() {
//   let datetimeData = tableData.forEach(ufoReport => Date.parse(ufoReport.datetime))
//   return Math.max(datetimeData)
// }

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select('#city');

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value").toLowerCase();

  // d3.selectAll('p').text('');

  var filteredData = tableData
  if (inputDateValue) {
    filteredData = filteredData.filter(event => event.datetime === inputDateValue);
  }
  else if (inputCityValue) {
    filteredData = filteredData.filter(event => event.city === inputCityValue)
  }

  d3.select("tbody").html("");

  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};



