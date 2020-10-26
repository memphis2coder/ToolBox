import React, {useState} from 'react';
import './TodoList.scss';

// functional component
// this is a standard functional component
function TodoList () {
    const [todo, updateTodo] = useState('');
    const [list, updateList] = useState('');

    function handleClick(e) {
        e.preventDefault();
        alert({updateTodo})
    };


    return (
        <div className='todo'>
            <h2>Todo List React</h2>
                <div className="todo-input-container">
                    <input 
                        type="text" 
                        value={todo} 
                        onChange={e => updateTodo(e.target.value)}
                    />
                    <button onClick={handleClick}>Add</button>
                </div>
                <div>
                    {
                        
                    }
                </div>
            <h3>{todo}</h3>
        </div>
    )
};

export default TodoList;