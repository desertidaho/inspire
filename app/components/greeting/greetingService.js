import Greeting from "../../models/greeting.js";

let _time = new Greeting

let time
function getTime() {
  let date = new Date()
  let hour = date.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let min = date.getMinutes()
  if (min < 10) {
    min = '0' + min
  }
  time = hour + ':' + min

}

let _state = {
  clock: ''
}

let _subscribers = {
  clock: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class GreetingService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Clock() {
    return _state.clock
  }

  getClock() {
    getTime()
    _setState('clock', time)
  }



}