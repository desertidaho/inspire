export default class ForecastWeather {
  constructor(data) {
    this.description = data[8].weather[0].description
    this.kelvin = data[8].main.temp
    this.celcius = (this.kelvin - 273.15).toFixed(0)
    // @ts-ignore
    this.farenheit = (this.celcius * (9 / 5) + 32).toFixed(0)
    this.windDegrees = (data[8].wind.deg).toFixed(0)
    this.windSpeed = (data[8].wind.speed).toFixed(0)
    this.icon = data[8].weather[0].icon
  }

  forecastWeatherTemplate() {
    // @ts-ignore
    $('#startModal').modal('show')
  }

  modalWx() {
    return `
    Tomorrow the sky condition will be ${ this.description}, temperature ${this.farenheit} degrees Farenheit, wind from ${this.windDegrees} at ${this.windSpeed} kts.
    `
  }

}