import GreetingService from "./greetingService.js";

let _greetingService = new GreetingService()

function drawData() {
  let time = _greetingService.Clock
  document.querySelector('#clock').innerHTML = time
  document.querySelector('#date').innerHTML = _greetingService.Date
  //part of day greeting logic
  if (+time[0] == 0 || (+time[0] == 1 && +time[1] == 0) || (+time[0] == 1 && +time[1] == 1)) {
    document.querySelector('#change-greeting').innerHTML = 'morning '
  } else if (+time[1] >= 2) {
    document.querySelector('#change-greeting').innerHTML = 'afternoon '
  } else if (+time[1] >= 7 || +time[0] == 2) {
    document.querySelector('#change-greeting').innerHTML = 'evening '
  }
}

function drawUserForm() {
  let template = `<form class="form-inline" onsubmit="app.controllers.greetingController.addUser(event)">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="" name="name" placeholder=" Name...">
                    <button type="submit" class="btn btn-primary mb-2 shadow">Submit</button>
                  </form>`
  document.querySelector('#user-form').innerHTML = template
  document.querySelector('#user').innerHTML = 'WAT!'
}

function drawNewUser() {
  let newUser = _greetingService.NewUser.name
  window.localStorage.setItem('name', JSON.stringify(newUser))
  document.querySelector('#user').innerHTML = newUser
  document.querySelector('#user-form').style.visibility = "hidden"
}


//Public
export default class GreetingController {
  constructor() {
    _greetingService.addSubscriber('clock', drawData)
    _greetingService.addSubscriber('todaysDate', drawData)
    _greetingService.addSubscriber('changeUser', drawUserForm)
    _greetingService.addSubscriber('newUser', drawNewUser)

    _greetingService.getDate()
    window.localStorage.getItem('name' || 'Brett')
    let newU = JSON.parse(window.localStorage.getItem('name'))
    document.querySelector('#user').innerHTML = newU

    function setTime() {
      _greetingService.getClock()
    }
    setInterval(setTime, 10000)
    setTime()
  }

  changeUser() {
    _greetingService.changeUser()
  }

  addUser(event) {
    event.preventDefault()
    let form = event.target
    let newUser = {
      name: form.name.value
    }
    _greetingService.addUser(newUser)
    form.reset()
  }

}



