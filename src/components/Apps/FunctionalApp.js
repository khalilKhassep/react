import { useEffect, useState } from "react"
//import React from 'react';
//import Fuse from 'fuse.js'
import '../../App.css';
//   import generateId from '../../Modules';
import Form from '../Elements/Form';
import Todos from '../Layout/Apps/TodoApp/Todos'

const appState =
{
    tasksDemo: [
        {
            title: "Task title demo",
            id: `task_${generateId(2000, 41)}`,
            created_at: new Date().toLocaleDateString(),
            completed:false,
        },
        {
            title: "Task title demo 2",
            id: `task_${generateId(2000, 41)}`,
            created_at: new Date().toLocaleDateString(),
            completed:false,
        }
    ],
    author: "Khalil Khassep"
}


function AppTwo() {


    const [tasks, setTasks] = useState([]);
    const [author, setAuthor] = useState('');
    const [value, setValue] = useState('');

    //console.log('Tasks firset render => ',tasks , author) 


    useEffect(() => {
        setTasks(appState.tasksDemo);
        setAuthor(appState.author)
    }, [])

    



    return (
        <div className="container">
            <div className="panel">
                <div className="panel-header">
                    <h4 className="title">{'Tasks'}</h4>
                    <h6>{`Total Tasks : ${tasks.length}`}</h6>
                </div>
                <div className="panel-body">
                    <div className="taskList">
                        <Todos todosList={tasks} setTasks={setTasks} author={author} />
                        <Form setValue={setValue} setTasks={setTasks} text={value}></Form>
                    </div>
                </div>

                <div className="panel-footer">
                    <h6 className={'text-center'}>{author}</h6>
                </div>
            </div>
        </div>
    )

}
function generateId(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}



export default AppTwo

