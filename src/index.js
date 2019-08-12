const mapboxgl = require("mapbox-gl");
let FullstackNYCoord = [-74.009151, 40.705086];
let FullstackChiCoord = [-87.641, 41.895];

mapboxgl.accessToken = "pk.eyJ1IjoiamVzc2Utc2hhcGlybyIsImEiOiJjano4bW9yc3QwcG1pM2NtaGJpcHp0OHZ1In0.9R1-eiCpHddydHRwyADU1w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let firstMarker = document.createElement("div");
firstMarker.style.width = "32px";
firstMarker.style.height = "39px";
firstMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(firstMarker).setLngLat(FullstackNYCoord).addTo(map);

// new mapboxgl.Marker(document.getElementById('test')).setLngLat(FullstackNYCoord).addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
