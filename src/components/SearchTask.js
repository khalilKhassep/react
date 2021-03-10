import React from 'react';

class SearchTask extends React.Component{

    constructor(props)
    {
        super(props);
        this.state  = {
            task_id : props.task.id,
            task:props.task
        }
    }

    render()
    {
        return(
            <div className="searchTask">
                <h1>Serach Task componenet</h1>
                {this.state.task}
            </div> 
        )
    }
}