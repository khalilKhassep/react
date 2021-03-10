import { useEffect, useState } from "react"

const appState =
{
    tasksDemo: [
        {
            title: "Task title demo",
            id: "demo_1",
            created_at: new Date().toLocaleDateString(),
        },
        {
            title: "Task title demo 2",
            id: "demo_2",
            created_at: new Date().toLocaleDateString(),
        }
    ],
    author: "Khalil Khassep"
}


function AppTwo(props) {


    const [tasks, setTasks] = useState([]);
    const [author, setAuthor] = useState('');
    const [value, setValue] = useState(''); 

    //console.log('Tasks firset render => ',tasks , author) 


    useEffect(() => {
        setTasks(appState.tasksDemo);
        setAuthor(appState.author)
    }, [])

    function sotoreTask() {
        const taskObj = {
            title: value,
            id: `task_${generateId(20, 1)}`,
            created_at: new Date().toLocaleDateString(),
        }
        setTasks(prevState => {
            return [...prevState, taskObj];
        })

    }




    // console.log('Valkue => ',value)
    return (
        <div className="container">
            <div className="panel">
                <div className="panel-header">
                    <h4 className="title">{'Tasks'}</h4>
                    <h6>{`Total Tasks : 5`}</h6>
                </div>
                <div className="panel-body">
                    <div className="taskList">
                        <ul className="tasks">
                            {
                                tasks.map((item, index) => {

                                    return (

                                        <li taskid={item.id} key={index}>
                                            <h4>{item.title}</h4>
                                            <span> <span>{'Created at : '}</span>{item.created_at}</span>
                                            <p className="author">{author}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="addTask">
                            <div className="form-group">
                                <input onChange={e => { setValue(e.target.value) }} type="text" className="form-controle" placeholder={'Enter Task '} />
                            </div>
                            <button onClick={sotoreTask} className={'btn'}>{'Add'}</button>
                        </div>
                    </div>
                </div>

                <div className="panel-footer">
                    <h6 className={'text-center'}>{author}</h6>
                </div>
            </div>
        </div>
    )

}


function List(props) {
    const listItems = props.items.map((item, index) => {
        return <li>{item.title}</li>
    })
    return (
        //  List item > title + date + id ;
        listItems
    )
}

function generateId(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default AppTwo