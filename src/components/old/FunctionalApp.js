import { useEffect, useState } from "react"


import '../../App.css';
import '../../Css/Loading.css';
import Form from '../elements/Form';
import Todos from '../layout/Apps/TodoApp/Todos'
//import Error from '../Elements/Error';
//Modules
import { getRequest } from '../../Modules'

function AppTwo() {

    const [tasks, setTasks] = useState([]);
    const [author, setAuthor] = useState('');
    const [value, setValue] = useState('');
    //const [error , setError] = useState('');
    const [update , setUpdates] = useState(false)



    useEffect(() => {
        getRequest('http://localhost:3333/tasks').then((resolved) => {
            setTasks(resolved)
        });

        getRequest('http://localhost:3333/user').then((resolved) => {
            setAuthor(resolved.name)
        })
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
                        <Form setValue={setValue} setTasks={setTasks} text={value} ></Form>
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

export default AppTwo

