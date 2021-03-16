import React from 'react';
 
  

const Form = ({ setValue, setTasks, text }) => {

    function sotreTask() {
        const taskObj = {
            title: text,
            id: `task_${generateId(2000, 41)}`,
            created_at: new Date().toLocaleDateString(),
            completed:false,
        }
        setTasks(prevState => {
            return [...prevState, taskObj];
        })
        setValue('');

    }

    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    console.log('Form comp => ', text)

    return (
        <div className="addTask">
            <div className="form-group">
                <input value={text} onChange={inputHandler} type="text" className="form-controle" placeholder={'Enter Task '} />
            </div>
            <button onClick={sotreTask} className={'btn primary'}>{'Add'}</button>
        </div>

    )

    

}

function generateId(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}


export default Form;