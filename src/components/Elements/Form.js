import React from 'react';


const Form = ({ setValue, setTasks, text }) => {

    function sotreTask() {
        const taskObj = {
            title: text,
            id: `task_${generateId(20, 1)}`,
            created_at: new Date().toLocaleDateString(),
        }
        setTasks(prevState => {
            return [...prevState, taskObj];
        })

    }

    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    console.log('Form comp => ', text)

    return (
        <div className="addTask">
            <div className="form-group">
                <input onChange={inputHandler} type="text" className="form-controle" placeholder={'Enter Task '} />
            </div>
            <button onClick={sotreTask} className={'btn'}>{'Add'}</button>
        </div>

    )

    function generateId(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}

export default Form;