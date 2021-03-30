import { useEffect, useState } from "react"


import '../../../App.css';
import '../assets/css/Loading.css';

import Form from '../../elements/Form';
import Loader from '../../elements/Loader';
import Todos from './Todos';
//import Error from '../Elements/Error';
//Modules
import { getRequest } from '../../Modules'

function TodoApp() {

    const [tasks, setTasks] = useState([]);
    const [author, setAuthor] = useState('');
    const [value, setValue] = useState('');
    //const [error , setError] = useState('');
    const [updates, setUpdates] = useState(false)



    useEffect(() => {
        setUpdates(true)
        getRequest('http://localhost:3333/tasks').then((resolved) => {
            setTasks(resolved)
        }).then();

        getRequest('http://localhost:3333/user').then((resolved) => {
            setAuthor(resolved.name)
        }).then(setUpdates(false))
        
    }, [])

    useEffect(()=> {
       
    })

    return (
        <div className="container">
            {updates && <Loader />}

            <div className="panel">
                <div className="panel-header">
                    <h4 className="title">{'Tasks'}</h4>
                    <h6>{`Total Tasks : ${tasks.length}`}</h6>
                </div>
                <div className="panel-body">
                    <div className="taskList">
                        <Todos todosList={tasks} setTasks={setTasks} author={author} />
                        <Form setValue={setValue} setTasks={setTasks} setUpdates={setUpdates} text={value} ></Form>
                    </div>
                </div>

                <div className="panel-footer">
                    <h6 className={'text-center'}>{author}</h6>
                </div>
            </div>
        </div>
    )

}
//Add header componenent 
//Add loader when one of these effects happens : 
/**
 * Effect loadingHomepage               : [ when getting tasks ] 
 * Effect completeTask  && deleteTask   : [ Loader when PUT tasks to new values (postRequest) ]
 * Effect addNewTask                    : [ Loader when submit new task ]
 */
//Add errors || messages to app when the following response happen : 
/**
 * -1 Successful status && Un successful status of [updating item] to have an example like 'Update succefued || faild'
 * -2 'New task added' || 'There is an error ${taskErr}'
 * -3 'Done' || 'Rejected '
 */

/**
 * Issue
 * Delete request : Sometime not update componenet state when delete task
 */

export default TodoApp;

