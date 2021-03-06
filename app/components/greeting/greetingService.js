let time
function getTime() {
  let date = new Date()
  let hour = date.getHours()
  if (hour == 0) {
    hour = 12
  }
  if (hour < 10) {
    // @ts-ignore
    hour = '0' + hour
  }
  let min = date.getMinutes()
  if (min < 10) {
    // @ts-ignore
    min = '0' + min
  }
  time = hour + ':' + min
}

let today
function getToday() {
  let date = new Date()
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let weekDay = weekDays[date.getDay()]
  let month = months[date.getMonth()]
  let day = date.getDate()
  let year = date.getFullYear()
  today = weekDay + ', ' + month + ' ' + day + ', ' + year
}

let _state = {
  clock: '',
  todaysDate: '',
  changeUser: {},
  newUser: {}
}

let _subscribers = {
  clock: [],
  todaysDate: [],
  changeUser: [],
  newUser: []
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

  get Date() {
    return _state.todaysDate
  }

  get ChangeUser() {
    return _state.changeUser
  }

  get NewUser() {
    return _state.newUser
  }

  getClock() {
    getTime()
    _setState('clock', time)
  }

  getDate() {
    getToday()
    _setState('todaysDate', today)
  }

  changeUser() {
    _setState('changeUser', ' ')
  }

  addUser(newUser) {
    _setState('newUser', newUser)
  }

}