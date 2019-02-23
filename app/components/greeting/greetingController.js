import GreetingService from "./greetingService.js";

let _greetingService = new GreetingService()

function drawClock() {
  document.querySelector('#clock-div').innerHTML = _greetingService.Clock
}


//Public
export default class GreetingController {
  constructor() {
    _greetingService.addSubscriber('clock', drawClock)
    function setTime() {
      _greetingService.getClock()
    }
    setTime()
    setInterval(setTime, 10000)
  }

}



