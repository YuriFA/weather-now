const getCurrentLocation = () => {
  return new Promise(function (resolve, reject) {
    if (!('geolocation' in navigator)) {
      return reject(new Error('haven`t geolocation API'));
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  // navigator.geolocation.getCurrentPosition(successCallback);
};

export default getCurrentLocation;
