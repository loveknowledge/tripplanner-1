const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');
let FullstackNYCoord = [-74.009151, 40.705086];
let FullstackChiCoord = [-87.641, 41.895];

mapboxgl.accessToken = "pk.eyJ1IjoiamVzc2Utc2hhcGlybyIsImEiOiJjano4bW9yc3QwcG1pM2NtaGJpcHp0OHZ1In0.9R1-eiCpHddydHRwyADU1w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', FullstackChiCoord)
const markerTwo = buildMarker('restaurant', FullstackNYCoord)
marker.addTo(map);
markerTwo.addTo(map);

