import React, { useEffect, useState } from 'react';
//  import _React from ''

import { postRequest, generateId } from '../Modules';


const Form = ({ setValue, setTasks,setUpdates, text }) => {

    const [mounted, setMounted] = useState(false);
    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    const _storeTaskToDatabase = async () => {
        
        setMounted(true);
        setUpdates(true);
        
        const id = generateId(100, 1);
        const taskObj = {
        
            title: text !== '' ? text : `Untitled-${id}` , id: `task_${id}` , 
            created_at: new Date().toLocaleDateString() , completed: false,
        }
      
        await postRequest('http://localhost:3333/tasks', taskObj).then((resolved) => {
            setTasks(prevstate => {
                return [...prevstate, resolved]

            })
        }).then(setValue('')).catch(console.log)

        setMounted(false);
        setUpdates(false);
    }

    return (
        <div className={`addTask`}>
            <div className="form-group">
                <input value={text} onChange={inputHandler} type="text" className="form-controle" placeholder={'Enter Task '} />
            </div>
            <button onClick={_storeTaskToDatabase} className={`btn primary ${mounted && 'loading'}`}>{'Add'}</button>
            <p>{mounted && 'Loading'}</p>
        </div>

    )



}

export default Form;

//Neeed clean :: Format code typing ;