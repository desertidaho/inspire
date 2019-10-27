export default class ForecastWeather {
  constructor(data) {
    this.description = data[7].weather[0].description
    this.kelvin = data[7].main.temp
    this.celcius = (this.kelvin - 273.15).toFixed(0)
    // @ts-ignore
    this.farenheit = (this.celcius * (9 / 5) + 32).toFixed(0)
    this.windDegrees = (data[7].wind.deg).toFixed(0)
    this.windSpeed = (data[7].wind.speed).toFixed(0)
    this.icon = data[7].weather[0].icon

    if (this.windDegrees < 10) {
      this.windDegrees = '00' + this.windDegrees
    }
    if (this.windDegrees < 100 && this.windDegrees >= 10) {
      this.windDegrees = '0' + this.windDegrees
    }
  }

  forecastWeatherTemplate() {
    // @ts-ignore
    $('#forecastModal').modal('show')
  }

  modalWx() {
    return `
    Sky condition ${ this.description} </br>
    Temperature ${this.farenheit}°F </br>
    Wind from ${this.windDegrees} @ ${this.windSpeed} kts.
    `
  }

}