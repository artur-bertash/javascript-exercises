const convertToCelsius = function (x) {
  const celcius = (x - 32) * 5 / 9
  const celciusRounded = Math.round(celcius * 10) / 10
  return celciusRounded
};

const convertToFahrenheit = function (x) {
  const fahrenheit = (x * 9) / 5 + 32
  const fahrenheitRounded = Math.round(fahrenheit * 10) / 10
  return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
