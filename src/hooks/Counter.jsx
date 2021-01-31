import React, { useState } from 'react';

import useDocumentTitle from './useDocumentTitle'

function Counter(props) {
    const [count, setCount ] = useState(0);
    const [name, setName] = useState('');

    useDocumentTitle(`${name} has clicked ${count} times`);

    // useEffect(() => {
    //     document.title = `${name} has clicked ${count} times`;

    // }, [count]);      useEffect will be called only on count state changes

    // useEffect(() => {
    //     document.title = `${name} has clicked ${count} times`;

    //     return () => {
    //         console.log("Clean up");   // componentWillUnmount
    //     }
    // }, []);
    // componentDidMount
    // componentDidUpdate

    return (
        <>
            <input onChange={(e) => setName(e.target.value)}></input>
            <div>
            {name} has clicked {count} number of times.
            </div>
            <button onClick={(() => setCount(count + 1))}>Increase</button>
        </>
    );
}

export default Counter;