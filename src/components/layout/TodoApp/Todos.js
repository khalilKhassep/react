import React from 'react';
import { useState, useEffect } from 'react';

import Icon from '../../elements/Icon';
import DateComp from '../../elements/Date';

import { deleteRequest, getRequest, updateRequest } from '../../Modules';


const Todos = ({ todosList, author, setTasks }) => {

    const [updated, setUpdated] = useState(false);

    const deleteTask = async (item, event) => {
        setUpdated(true)
        
        event.target.classList.value = 'btn danger loading';
        
        await deleteRequest('http://localhost:3333/tasks/' + item.id);
        await getRequest('http://localhost:3333/tasks').then(
            (resolved) => {
                setTasks(resolved)
            })

        setUpdated(false)
        event.target.classList.value = 'btn danger'

    }

    const _completeTask = async (task, event) => {

        setUpdated(true)

        event.target.classList.value = 'btn successful loading'
        await updateRequest(`http://localhost:3333/tasks/${task.id}`, task).catch(console.log);

        await getRequest('http://localhost:3333/tasks').then((resolved) => {
            setTasks(todosList.map(todo => {
                if (todo.id == resolved.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            }))
        })

        setUpdated(false)
        event.target.classList.value = 'btn successful'


    }
    return (
        <ul className="tasks">
            {
                todosList.map((item) => {

                    return (

                        <li taskid={item.id} key={item.id} className={'task'}>

                            <div className={'content'}>
                                <h4 className={item.completed ? "completed" : ''}>{item.title}</h4>
                                <p className="date"> <span>{'Created at  '}</span>{item.created_at}</p>
                                <p className="author"> <span>{'Author'}</span>{author}</p>
                                <DateComp format="date" />
                            </div>

                            <div className={'actions'} >

                                <button key={item.id} type="submit" onClick={(event) => { deleteTask(item, event) }} className={`btn danger `}>
                                    {<Icon icon={'fas fa-trash'} />}
                                    {"Delete"}
                                </button>

                                <button onClick={(event) => { _completeTask(item, event) }} type={'submit'} className={`btn successful `}>
                                    {item.completed ? <Icon icon={'far fa-check-circle'} ></Icon> : <Icon icon={'fas fa-check-circle'} />}
                                    {item.completed ? 'Complete' : 'Uncomplete'}
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    )
}


// Listing tasks componenet single task list on tasks list componenet;
// Add date formated;
// Add click action to route to Task page;
// Create Task details componenet;
//Store tasks to Cloud storage
// Close project demo;
// Start with internship task;

/**
 * Update task status completed 
 * Delete task by task id
 * make loader 
 * 
 * Rename folder name to be something match;
 */
export default Todos;