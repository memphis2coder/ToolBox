import React, {useState, useEffect} from 'react';
import './TodoList.scss';

function TodoList () {
    const LIST = [
        {
            id: 0,
            title: "Antonio",
            job: "ups"
        },
        {
            id: 1,
            title: "andy",
            job: "web"
        },
        {
            id: 2,
            title: "kim",
            job: "react"
        }
    ];

    const [list, setList] = useState(LIST);

    const onRemoveItem = () => {
        // remove item from list

        // return the new list
        console.log('clicked')
    }

    return (
        <div className='todo'>
            <ul>
            {
                list.map(item => (
                    <li key={item.id}>
                        <span>title: {item.title}</span>
                        <div>job: {item.job}</div>
                        <button onClick={() => onRemoveItem(item.id)} type="button">remove</button>
                        <br/>
                    </li>
                ))
            }
            </ul>
        </div>
    )
};

export default TodoList;