import TodoService from "./todoService.js";

const _todoService = new TodoService()

function _drawTodos() {
	//todos list
	let template = ''
	_todoService.Todos.forEach(t => {
		if (t.completed == true) {
			template += `
				<li class="mb-2" onclick="app.controllers.todoController.getTodos()"><del>${t.description}</del>  &ensp; <button class="btn btn-sm btn-danger shadow" id="todo-delete" onclick="app.controllers.todoController.removeTodo('${t._id}')">Delete</button></li>
        `
		} else {
			template += `
        <li onclick="app.controllers.todoController.getTodos()">${t.description} &ensp;<input type="checkbox" class="todo-checkbox mt-2" name="completed"
				 onclick="app.controllers.todoController.toggleTodoStatus('${t._id}')"></li>
				`
		}
	})
	document.querySelector('#todos').innerHTML = template

	//number of todo's logic
	if (_todoService.Todos.length == 0) {
		document.querySelector('#num-of-todos').innerHTML = ' all caught up'
	} else if (_todoService.Todos.length == 1) {
		document.querySelector('#num-of-todos').innerHTML = ' ' + _todoService.Todos.length + ' ' + 'task'
	} else if (_todoService.Todos.length > 1) {
		document.querySelector('#num-of-todos').innerHTML = ' ' + _todoService.Todos.length + ' ' + 'tasks'
	}

	//add todo input form
	document.querySelector('#todo-form').innerHTML = `
        <form onsubmit="app.controllers.todoController.addTodo(event)" class="mt-3">
          <input required id="todo-input" type="text" class="todo-form" name="description" placeholder=" New todo...">
					<button class="btn btn-sm btn-outline-light shadow todo-btn mb-1" type="submit">Add</button>  <span class="completed">Completed <i class="fas fa-check"></i></span>	
        </form>
  `
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


//Public
export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)

		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	getTodos() {
		_todoService
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
		}
		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(_id) {
		_todoService.toggleTodoStatus(_id)
	}

	removeTodo(_id) {
		_todoService.removeTodo(_id)
	}

}
