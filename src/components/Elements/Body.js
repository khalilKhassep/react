import React from "react";
//My Assets
import TaskList from "./TaskList"
import NoTask from './NoTask';
class Body extends React.Component{
    constructor(props)
    {
        super(props);
        this.state  = {
            items: [
                {
                    item_title:"Title one"
                },
                {
                    item_title:"title 2"
                },
                {
                    item_title: "title 3"
                }
            ],
        }
    }

    bodyContent(tasks)
    {
   let  _tasks = localStorage.getItem('task1');
    console.log(_tasks);
     if(tasks !== undefined)
       {
         return <TaskList tasks={tasks}></TaskList>
       }
       else{
         return <NoTask></NoTask>
      }
    }

    render() {
        //Render Body +||+ Only return a react Element other less an error of 
        const tasksJson = JSON.stringify(this.state.items);
//        const tasksArr = this.state.tasks.map() 
         const e = this.bodyContent()
        return( 
          e
        );
    }
}
export default Body;