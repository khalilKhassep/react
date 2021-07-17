import React from 'react';
import Button from '../Elements/Button';

class NoTask extends React.Component{
    constructor(props)
    {
        super(props);
     
        //Default value add
        this.state = {
           button:{
               type:'add'
           }
        }
    }
    
    
    render()
    {
        return(
            <div>
            <h1>{'There is no tasks'}</h1>
            <Button type={'add'}></Button>
            </div>
        )
    }
}

export default NoTask;