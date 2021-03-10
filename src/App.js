import React from 'react';
import Fuse from 'fuse.js'
import './App.css';

import List from './components/Layout/List';

class App extends React.Component {
  //Parent Componenet all other component renders here at main enrtyPoint 

  constructor(props) {
    super(props);
    // Setting State to initial values;
    this.state = {
      tasks: [],
      list:null,
      value: null,
      search:null,
      searchInput : null
    }

    //Binding 
    this.bindValue = this.bindValue.bind(this);
    this.searchInputBind = this.searchInputBind.bind(this)
    
    this.storeTask = this.storeTask.bind(this)
    this.setTasks = this.setTasks.bind(this);
    this.getTasks = this.getTasks.bind(this)
    this.getTaskByTitle = this.getTaskByTitle.bind(this)
   
    this.clearStorage = this.clearStorage.bind(this)

  }

  setTasks(tasks) {
    tasks = this.state.tasks;
    tasks = JSON.stringify(tasks);
    return localStorage.setItem('tasks', tasks);
  }

  getTasks(key) {

    if (localStorage.length > 0) {
      let sotrageContent = localStorage.getItem(key);
      sotrageContent = JSON.parse(sotrageContent);
      sotrageContent.map((item) => {
        this.setState(state => ({
          tasks: [...state.tasks, item]
        }));
      })
    }

    // console.log(this.state)
  }
  getTaskByTitle()
  {
    if(localStorage.length > 0)
    {
      let tasks = localStorage.getItem('tasks');
      tasks = JSON.parse(tasks);
      const fues = new Fuse(tasks , {keys:['title']})
      let searchText = this.state.search == null ? '' : this.state.search
      const result = fues.search(searchText)
      
      this.setState({list:result});
   
    } 
     
  }
  //Binding Start
  bindValue(event) {

    this.setState({ value: event.target.value })
    //console.log(this.state.value)
  }

  searchInputBind(event)
  {
    this.setState({search:event.target.value})
    
  }
  //Async
 

  async storeSetTransiction(obj) {
    return new Promise((resolve, reject) => {
      this.setState(state => {
        return { tasks: [...state.tasks, obj] }
      }, resolve)
    })
  }




  storeTask() {  //Issue not storing a taks inserted before
    if (this.state.value != null) {
      let taskObj = {
        id: this.generateId(100, 1),
        title: this.state.value
      }

      this.storeSetTransiction(taskObj).then(this.setTasks)

      //console.log('storeTask', this.state)

    }
  }

 


  componentDidMount() {
    this.getTasks('tasks')
    //console.log('componentDidMount', this.state)
  }

  componentWillUnmount() {
    console.log('Befor render', this.state)
  }

  render() {
    
    let _list = JSON.stringify(this.state.list) 
    
    return (
      <div className="content">
        <div className="task-container">
          <div className={"task-header"}>{'Tasks are listed here'}</div>
          <div className="tasks">

            <ul className="task-list">
              {this.state.tasks.map((task, index) => {
                return <li key={index} taskid={task.id}>{task.title}</li>
              })}
            </ul>
          </div>
          <div className="task-add">
            <div className="form-group">
              <input onChange={this.bindValue} type="text" placeholder={'Enter Task title'} defaultValue="" />
            </div>

            <div className="form-group">
              <button className="btn" onClick={this.storeTask}>{'Store Task'}</button>
            </div>
          </div>
           
        </div>
        <div className="panel">
           <div className="form-group ">
               <button className={'btn btn-block'} style={{ backgroundColor: '#ec4747' }} onClick={this.clearStorage}>Claer storage</button>
           </div>
           <div className="form-group"> 
                <input onChange={this.searchInputBind} style={{ marginBottom:"5px", display:"block" }} type="text" placeholder={'Enter Task title'} defaultValue="" />
                <button className={'btn btn-block'} style={{ backgroundColor: 'rgb(236 178 71)', marginBottom:"5px", display:"block" }} onClick={this.getTaskByTitle}>{'Search'}</button>
           </div>
           <div className="result">
             <List list={this.state.list} />
           </div>
        </div>
      </div>

    )
  }

  generateId(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  clearStorage() {
    localStorage.clear()
    window.location.reload()
  }
}
export default App;
