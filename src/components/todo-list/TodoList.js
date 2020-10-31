import React, {useState, useEffect} from 'react';
import './TodoList.scss';

function TodoList () {
    // fake data
    const LIST = [
        {
            id: 0,
            animal: "dog",
            color: "brown"
        },
        {
            id: 1,
            animal: "cat",
            color: "white"
        },
        {
            id: 2,
            animal: "bird",
            color: "green"
        }
    ];
    
    // state
    const [list, setList] = useState(LIST)
    const [input, setInput] = useState('');
    
    // function to record the input data
    const handleChange = (e) => {
        // track input fields state
        let input = e.target.value;
        setInput(input);
        console.log(input);
    }

    // function to add to list
    const handleAdd = () => {

    }

     // function to remove list item
    const onItemRemove = (id) => {
        // remove clicked item
        const newList = list.filter((item) => item.id !== id);
        // return a new list
        setList(newList)
    };
    
    return (
        <div className='todo'>

            <div>
                <form>
                    <input type="text" onChange={handleChange} value={input}/>
                    <button>add</button>
                </form>
            </div>

            <div>
                <ul>
                    {
                        list.map((item) => (
                            <li key={item.id}>
                                <span>animal: {item.animal}</span>
                                <br />
                                <span>color: {item.color}</span>
                                    <div>
                                        <button onClick={() => onItemRemove(item.id)}>remove</button>
                                    </div>
                                <br/>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
};

export default TodoList;