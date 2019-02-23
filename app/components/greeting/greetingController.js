import GreetingService from "./greetingService.js";

let _greetingService = new GreetingService()

function drawData() {
  let time = _greetingService.Clock
  document.querySelector('#clock').innerHTML = time
  document.querySelector('#date').innerHTML = _greetingService.Date
  if (+time[1] >= 2) {
    document.querySelector('#change-greeting').innerHTML = 'afternoon'
  }
  if (+time[1] >= 7 || +time[0] == 2) {
    document.querySelector('#change-greeting').innerHTML = 'evening'
  }
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



