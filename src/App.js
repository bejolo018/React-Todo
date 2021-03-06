import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Item from './components/TodoComponents/Todo';

const TodoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor (){
  super();
  this.state = {
    TodoArray
  }
}

addTodo = Todo =>{
  this.setState({
    groceries: [
      ...this.state.groceries,
      {name: Item, purchased: false, id: Date.now()}
    ]
  });
};

toggleComplete = id => {
  this.setState({
    TodoArray: this.state.TodoArray.map(Todo => 
        Todo.id === id ? {...Todo, purchased: !Todo.purchased} : item 
      )
  });
};

removePurchased = () => {
  this.setState({
    TodoArray: this.state.TodoArray.filter(item => !item.purchased)
  });
};

render() {
  return (
  <div className='App'>
    <div className='header'>
    <h1>Shopping List</h1>
    <AddItemForm addItem={this.addItem} />
    </div>
    <TodoList
    TodoArray={this.state.TodoArray}
    toggleComplete={this.toggleComplete}
    />
    <button onClick={this.removePurchased}>Clear Purchase</button>
  </div>
  );
}
}

export default App