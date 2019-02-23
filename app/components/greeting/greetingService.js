import Greeting from "../../models/greeting.js";





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



}