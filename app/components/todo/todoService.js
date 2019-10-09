import Todo from "../../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/brett/todos/',
	timeout: 15000
});

let _state = {
	todos: [],
	error: {}
}

let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


//Public
export default class TodoService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Todos() {
		return _state.todos
	}

	get TodoError() {
		return _state.error
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(_id) {
		let todo = _state.todos.find(todo => todo._id == _id)
		todo.completed = !todo.completed

		todoApi.put(_id, todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(_id) {
		todoApi.delete(_id)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

}
