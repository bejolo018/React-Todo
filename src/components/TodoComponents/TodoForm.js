import React from 'react';

export default class TodoForm extends React.Component{
constructor(props){
    super(props);
    this.state = {
        input: ''
    };
}

onUpdate = event => {
    this.setState({ [event.target.name]: event.target.value});
};

handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.input);
    this.setState({ input: ''});
};

render(){
    return (
        <form>
            <input 
            placeholder='...todo'
            type= 'text'
            name= 'todo'
            onChange={props.handleTodoChange}
            value={props.value}
            />
            <button> Add Todo</button>
            <button> Clear Completed</button>
        </form>
    )
}

}