import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";


class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      // todoController: new TodoController(),
      // quoteController: new QuoteController()
    }
  }
}

window['app'] = new App()  