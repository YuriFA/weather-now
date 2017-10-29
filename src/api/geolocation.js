const getCurrentLocation = (successCallback) => {
  if (!('geolocation' in navigator)) {
    console.log('haven`t geo');
    return undefined;
  }

  navigator.geolocation.getCurrentPosition(successCallback);
};

export default getCurrentLocation;
