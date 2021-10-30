// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
    // Create a row for each object in the data array
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Insert each item in this object into a <td> tag
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val); 
        });
    });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        // if a date is provided, filter the data to just that date
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData)