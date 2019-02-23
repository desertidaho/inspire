import GreetingService from "./greetingService.js";

let _greetingService = new GreetingService()

function drawClock() {

}


//Public
export default class GreetingController {
  constructor() {
    _greetingService.addSubscriber('clock', drawClock)

  }

}

function getTime() {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let time = hour + ':' + min
  document.querySelector('#clock-div').innerHTML = time
  setTimeout(getTime, 10000)
}
getTime()

