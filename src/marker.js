const mapboxgl = require("mapbox-gl");

function buildMarker(type, coordsArray) {

  let firstMarker = document.createElement("div");
  firstMarker.style.width = "32px";
  firstMarker.style.height = "39px";

  if (type === 'activity') {
    firstMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'hotel') {
    firstMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    firstMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  return new mapboxgl.Marker(firstMarker).setLngLat(coordsArray)

}

module.exports = buildMarker;
