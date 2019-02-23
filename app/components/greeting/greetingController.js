import GreetingService from "./greetingService.js";

let _greetingService = new GreetingService()

function drawData() {
  document.querySelector('#clock').innerHTML = _greetingService.Clock
  document.querySelector('#date').innerHTML = _greetingService.Date
}


//Public
export default class GreetingController {
  constructor() {
    _greetingService.addSubscriber('clock', drawData)
    _greetingService.getDate()

    function setTime() {
      _greetingService.getClock()
    }
    setInterval(setTime, 10000)
    setTime()



  }

}



