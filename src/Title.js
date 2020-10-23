import React, {useState} from 'react';

// functional component
// this is a standard functional component
function Title () {
    const [count, setCount] = useState(0);
    

    // return some JSX
    return (
        <div>
            <h3>{count}</h3>
            
            <button onClick={() => setCount(count + 1)}>click me</button>        
        </div>
    )
};

export default Title;