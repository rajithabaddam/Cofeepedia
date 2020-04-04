var arabicaJson = arabica;
var robustaJson = robusta;
var consumpDataJson = consump;

// initialize layer groups
var arabicaLayer = L.layerGroup([])
var robustaLayer = L.layerGroup([])
var consumpLayer = L.layerGroup([])

// create arabica markers, add to arabicaLayer
for (var i = 0; i < arabica.length;i++) {
    L.circle([arabica[i]["Latitude"], arabica[i]["Longitude"]], {
      color: "#817800",
      fillColor: "#817800",
      fillOpacity: 0.7,
      radius: arabica[i]["Value"] * 75
    }).bindPopup("<h5>" + arabica[i]["Country_Name"] + "</h5><hr><strong>Arabica Production:</strong> " + arabica[i]["Value"] + " x1,000 60kg bags</h3>")
.addTo(arabicaLayer)};

// create robusta markers, add to robustaLayer
for (var i = 0; i < robusta.length;i++) {
    L.circle([robusta[i]["Latitude"], robusta[i]["Longitude"]], {
      color: "#42853D",
      fillColor: "#42853D",
      fillOpacity: 0.7,
      radius: robusta[i]["Value"] * 75
    }).bindPopup("<h5>" + robusta[i]["Country_Name"] + "</h5><hr><strong>Robusta Production: </strong>" + robusta[i]["Value"] + " x1,000 60kg bags</h3>")
.addTo(robustaLayer)};

// create consumption markers, add to consumpLayer
for (var i = 0; i < consump.length;i++) {
    L.circle([consump[i]["Latitude"], consump[i]["Longitude"]], {
      color: "#4E2B1B",
      fillColor: "#4E2B1B",
      fillOpacity: 0.7,
      radius: consump[i]["Value"] * 75
    }).bindPopup("<h5>" + consump[i]["Country_Name"] + "</h5><hr><strong>Domestic Consumption: </strong>" + consump[i]["Value"] + " x1,000 60kg bags</h3>")
.addTo(consumpLayer)};

// build basemap layers
var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var outdoors = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});

var baseMaps = {
  Outdoors: outdoors,
  Satellite: satellite,
  Dark: dark
};

var overlayMaps = {
"Arabica Production": arabicaLayer,
"Robusta Production": robustaLayer,
"Domestic Consumption": consumpLayer
};

// create map object
var map = L.map("map", {
center: [40, 0],
zoom: 2,
layers: [outdoors, arabicaLayer, robustaLayer, consumpLayer]
});

var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (myMap) {
    var div = L.DomUtil.create('div', 'info legend'),
                layers = ['Arabica Production','Robust Production','Consumption'];
               // labels = [];
                var colors = [
                    "#817800",
                    "#42853D",
                    "#4E2B1B"
                  ];
    // loop through density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < layers.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +  layers[i]   + '<br>' ;
    }
    return div;
    };
    legend.addTo(map); 

// add layer control to map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);