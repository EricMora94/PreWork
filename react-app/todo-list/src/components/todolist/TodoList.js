import React, { useState, useEffect } from 'react';

function TodoList() {

    const [tl, setTL] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [fetched, isFetched] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => { setTL([json.title]); console.log(json.title); isFetched(true); })
    }, [])

    useEffect(() => {
        console.log("Task added")
    }, [tl])

    const handleTodoItem = (event) => {
        event.preventDefault();
        if(todoItem!==''){
            console.log('Value', todoItem);
            setTL([...tl, todoItem]);
            setTodoItem('');
        }
    }
    return (
        <div>
            <form onSubmit={handleTodoItem}>
                <input type='text'
                    value={todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                    placeholder='Enter a new task' />
                <p />
                <button type='submit'>Add new Task</button>
            </form>
                {fetched ? <div>
                    {tl.map(item =><p>{item}</p>)}
                </div> : <></>}
        </div>
    )
} 
export default TodoList;