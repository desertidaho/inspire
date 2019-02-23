import TodoService from "./todoService.js";

let _todoService = new TodoService()

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
        <li onclick="app.controllers.todoController.getTodos()">${t.description}
				<p>Check if complete &ensp;<input type="checkbox" class="todo-form" name="completed"
				 onclick="app.controllers.todoController.toggleTodoStatus('${t._id}')"></p>
					</li>
				`
		}
	})
	document.querySelector('#todos').innerHTML = template

	//add todo input form
	document.querySelector('#todo-form').innerHTML = `
        <form onsubmit="app.controllers.todoController.addTodo(event)">
          <input required id="todo-input" type="text" class="todo-form" name="description" placeholder=" Description of new todo...">
          <button class="btn-outline-dark shadow" type="submit">Add todo</button>
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
