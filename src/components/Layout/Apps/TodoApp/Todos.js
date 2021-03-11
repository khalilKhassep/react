import React from 'react';


const Todos = ({ todosList, author }) => {

    return (
        <ul className="tasks">
            {
                todosList.map((item, index) => {

                    return (

                        <li taskid={item.id} key={index} className={'task'}>
                            <div className={'content'}>   
                                <h4>{item.title}</h4>
                                <p className="date"> <span>{'Created at  '}</span>{item.created_at}</p>
                                <p className="author"> <span>{'Author'}</span>{author}</p>
                            </div>
                            <div className={'actions'} >
                                <button type="submit" className={'btn danger'}>{'Delete Task'}</button>
                                <button type={'submit'} className={"btn successful"}> {'Complete Task'} </button>
                            </div>
                        </li>
                    )
                }) 
            }
        </ul>

    )
}

export default Todos; 