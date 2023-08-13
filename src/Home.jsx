import React, { useState, useEffect } from 'react'
import Task from './Task'

export default function Home() {
    const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks ")): [];
    const [tasks, setTasks] = useState(initialArray)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const deleteTask =(index)=>{
        const filteredArr = tasks.filter((value, i) => {
            return i!== index;
      
        })
        setTasks(filteredArr)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTasks([...tasks,{
            title,             description
        }])
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    useEffect (()=>{
localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks]
    
    )
    return (
        <>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <h1>daily goals</h1>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='description'
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    >
                        
                    </textarea>
                    <button type='submit'>ADD </button>
                </form>
                {tasks.map((item,index) =>
                    <Task key={index} title={item.title} description={item.description}
                    deleteTask={deleteTask}
                    index={index}
                    />
                )}
            </div>

        </>
    )
}
