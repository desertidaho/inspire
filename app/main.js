import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/imageController.js";
import TodoController from "./components/todo/todoController.js";
import QuoteController from "./components/quote/quote-controller.js";
import GreetingController from "./components/greeting/greetingController.js";

class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      todoController: new TodoController(),
      quoteController: new QuoteController(),
      greetingController: new GreetingController()
    }
  }
}

window['app'] = new App()