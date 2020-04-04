var svgWidth = 1000;
var svgHeight = 700;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 200
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var diameter = 700, //max size of the plot
    format   = d3.format(",d"),
    color    = d3.scaleOrdinal(d3.schemeDark2);
 
var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(10);

var svg = d3.select("#bubbles")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bubble");

// initialize plot with arabica
var selectedAttr = "Arabica_Production";

// identify buttons
var button = d3.selectAll("button");

button.classed("active", false);

// create toolTip
var tooltip = d3.select("#bubbles")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0); // must do this so empty tooltip doesn't appear upon page load

var showTooltip = function(d) {

    tooltip.style("opacity", .95)
        .html("<h5>" + d.data["Country_Name"] + "</h5><br><strong>" + selectedAttr + ":</strong> " + d.data.value + " x1,000 60kg bags")
        // .style("left", (d3.mouse(this)) + "px")
        // .style("top", (d3.mouse(this)) + "px")
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px")
}

var hideTooltip = function(d) {
    tooltip.style("opacity", 0);
    }  

// create function to draw bubbles
function createBubbles(bubblesData, selectedAttr) {

    var data = bubblesData.map(function(d) {
        d.value = +d[selectedAttr]; return d;
    });

    var bubblesGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    data.forEach(function(d) {
        var root = d3.hierarchy({children:data})
            .sum(d => d.value)
            .sort(function(a, b) {return -(a.value - b.value);
            });
        
        bubble(root);

        var bubbles = bubblesGroup.selectAll(".bubble")
            .data(root.children)
            .enter()
            .append("circle")
            .attr("class", "circle")
            .attr("r", d => d.r)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .style("fill", d => color(d.value))
            .on("mouseover", showTooltip)
            .on("mouseleave", hideTooltip);

        return bubbles;
    });
}

d3.csv("static/data/data_2019.csv").then(function(data, err){
    if (err) throw err;

    // draw bubbles
    createBubbles(data, selectedAttr);

    // event listener
    button.on("click", function() {

        // find clicked button
        button = d3.select(this);

        var attr = d3.select(this).attr("id");
        if (attr !== selectedAttr) {
            selectedAttr = attr;
            console.log("Selected attr: " + selectedAttr)
            if (attr == "Arabica_Production") {selectedAttr = "Arabica_Production";}
            else if (attr == "Robusta_Production") {selectedAttr = "Robusta_Production";}
            else if (attr == "Production") {selectedAttr = "Production";}
            else if (attr == "Domestic_Consumption") {selectedAttr = "Domestic_Consumption";}
            else if (attr == "Imports") {selectedAttr = "Imports";}
            else  {selectedAttr == "Exports";}
            
            // clear bubbles
            d3.selectAll(".bubble").html("");

            // recreate bubbles
            createBubbles(data, selectedAttr);
        }
    });
    
    }).catch(function(error) {
        console.log(error);
});