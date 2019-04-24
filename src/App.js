import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor (){
  super();
  this.state = {
    todosOnState: Todo,
    todos : [
      {
        task: 'Organize Garage',
        id: '1528817',
        completed: false,

    },

      {
        task: 'Bake Cookies',
        id: '1528817084358',
        completed: false
      }
    ]
  }
}

handleChanges = event => {
  console.log(event.target.name);
  this.setState({
    Todo: {
      ...this.state.Todo,
      [event.target.name]: event.target.value
    }
  })
}

addItem = event => {
  event.preventDefault();
  this.setState({
    todosOnState: [...this.state.todosOnState, this.state.Todo],
    todos: {}
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos = {this.state.todos} />
        <TodoForm />
      </div>
    )
  }
}

export default App