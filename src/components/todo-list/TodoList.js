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

    const [isOn, setIsOn] = useState(false);
    const [timer, setTime] = useState(0);

    useEffect(() => {
        let interval;

        if (isOn) {
            interval = setInterval(() => setTime(timer + 1), 1000)
        }
        return () => clearInterval(interval)
    },[isOn, timer]);

    const onReset = (() => {
        setIsOn(false);
        setTime(0);
    });
    
    return (
        <div className='todo'>
            <div>
            <h1>{timer}</h1>

                {!isOn && (
                    <button type='button' onClick={() => setIsOn(true)}>
                        Start
                    </button>
                    )}

                {isOn && (
                    <button type='button' onClick={() => setIsOn(false)}>
                        Stop
                    </button>
                )}

                <button onClick={onReset}>
                    reset
                </button>

            </div>
        </div>
    )
};

export default TodoList;