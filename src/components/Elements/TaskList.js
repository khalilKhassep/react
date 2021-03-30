import React from 'react';
import Button from './Button'
class TaskList extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            items: this.props.tasks
        }
    }
  render()
  {
     const tasks = JSON.parse(this.state.items);
   return ( 
       <div className={"task-list-container"}>
        
       </div>
   )
  } 


}

export default TaskList