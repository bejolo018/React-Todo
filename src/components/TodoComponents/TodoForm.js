import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input 
            placeholder='...todo'
            onChange={props.handleTodoChange}
            value={props.value}
            />
            <button> Add Todo</button>
            <button> Clear Completed</button>
        </form>
    )
}

export default TodoForm