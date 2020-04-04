// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(tableData);

function populatetabeldata(data){
  d3.selectAll("td").remove()
  data.forEach((coffeedata) => {
    var row = tbody.append("tr");
    Object.entries(coffeedata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
};

populatetabeldata(tableData);

var yearDropdown = d3.select("#year");
  yearDropdown.selectAll("option")
  //collect only unique values
  .data(d3.map( tableData,d => d.Market_Year).keys())
  .enter().append("option").attr("value", d => d)
  .text(d => d).sort(d3.ascending); 

var countryDropdown = d3.select("#country");
    countryDropdown.selectAll("option")
    //collect only unique values
    .data(d3.map( tableData,d => d.Country_Name).keys())
    .enter().append("option").attr("value", d => d)
    .text(d => d).sort(d3.ascending); 


  var attribDropdown = d3.select("#attribute");
  attribDropdown.selectAll("option")
  //collect only unique values
  .data(d3.map( tableData,d => d.Attribute_Description).keys())
  .enter().append("option").attr("value", d => d)
  .text(d => d).sort(d3.ascending);

  var button = d3.select("#reset-btn");

button.on("click", function() {

  //$("#year").html(''); 
  $("#year").val("0");
  $("#country").val("0"); 
  $("#attribute").val("0");
  populatetabeldata(tableData);

});

  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node

  // Get the value property of the input element
  var inputyear = d3.select("#year").property("value");
  console.log(inputyear);
  var inputcountry = d3.select("#country").property("value");
  console.log(inputcountry);
  var inputattribute = d3.select("#attribute").property("value");
  console.log(inputattribute);
  


  filteredData = tableData;

  console.log(filteredData);


  if (inputyear.length>0) {

    year = parseInt(inputyear);

  var filteredData = filteredData.filter(dateselected => dateselected.Market_Year == year);
 };
 
 
 if (inputcountry.length>0) {

  var filteredData = filteredData.filter(countryselected => countryselected.Country_Name === inputcountry);
 };

 if (inputattribute.length>0) {

  var filteredData = filteredData.filter(attribselected => attribselected.Attribute_Description === inputattribute);
 };

 
 
  console.log(filteredData);
  populatetabeldata(filteredData);
});
