function getCurrentLocation(successCallback) {
  if (!('geolocation' in navigator)) {
    console.log('haven`t geo');
    return undefined;
  }

  navigator.geolocation.getCurrentPosition(successCallback);
}

function onGeoSuccess(position) {
  var root = document.getElementById('root');
  root.innerHTML = 'Coords: ' + position.coords.latitude + ', ' + position.coords.longitude;
}

window.onload(function(e) {
  getCurrentLocation(onGeoSuccess);
});