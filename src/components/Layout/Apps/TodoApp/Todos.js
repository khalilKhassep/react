import React from 'react';


const Todos = ({ todosList, author }) => {

    return (
        <ul className="tasks">
            {
                todosList.map((item, index) => {

                    return (

                        <li taskid={item.id} key={index} className={'task'}>
                            <h4>{item.title}</h4>
                            <span className="date"> <span>{'Created at : '}</span>{item.created_at}</span>
                            <p className="author">{author}</p>
                        </li>
                    )
                })
            }
        </ul>

    )
}

export default Todos;