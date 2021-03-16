import React from 'react';
import { useState, useEffect } from 'react';

const Todos = ({ todosList, author, setTasks }) => {

    

    const handleDelete = (item) => {
        setTasks(todosList.filter((el) => el.id !== item.id))                                                                                                                                                                       
    }

    const completeTask = (item) => {
        setTasks(todosList.map(todo => {
            if (todo.id === item.id) {
                return {
                    ...todo, completed: !todo.completed
                }}
            return todo
        }))}
       
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
                            </div>
                            <div className={'actions'} >
                                <button key={item.id} type="submit" onClick={() => { handleDelete(item) }} className={'btn danger'}>{'Delete Task'}</button>
                                <button onClick={() => { completeTask(item) }} type={'submit'} className={"btn successful"}> {item.completed ? "Un Complete" : 'Complete'} </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    )
}

export default Todos;