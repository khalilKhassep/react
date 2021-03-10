import React from 'react';
class Button extends React.Component {
  
    constructor(props)
    {
        super(props)
        this.state  = {
            title:'',
            id:0,
            value:''
        }

        this.handleInput =  this.handleInput.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    createButton(btnType)
    {
      let e ;
        switch(btnType)
       {
           case "add" :
               return e = this.withInput(btnType)
               break;
            default:
                return e = this.button(btnType)
                break;   
       }

    }

    withInput(type)
    {
        return(
            <div className="btn-container">
                <button onClick={this.handleButton} type={type}>{type}</button>
                <input onChange={this.handleInput} type="text" placeholder={`${type} Task`} /> 
            </div>
        )
    }

    button(type)
    {
         <div className="btn-container">
           <button type={'submit'}>{'type'}</button>
         </div>
    }

    handleInput(event)
    { 
       this.setState({title:event.target.value})
            
    }

    handleButton(option)
    {
        //this.setState({id:this.state.id++})
        this.storeTask(this.state.title);

    }


    storeTask(value)
    {
        this.setState({id:this.state.id++}) 
        localStorage.setItem("task"+this.state.id , value);
    }
    submitValueToConsle(value)
    {
        console.log(value);
    }
    
    render()
    {
       const eRender = this.createButton(this.props.type)
        return(
            eRender
        )
    }
  
}

export default Button;