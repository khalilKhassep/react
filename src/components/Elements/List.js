import React from 'react';

class List extends React.Component {
    constructor(props)
    {
       super(props)  
       
       this.state = {
         list :[
           {
           
              id: 12,
              title: "event"
           }
         ],
       }
     
    }

    componentWillReceiveProps(nextProps)
    {
      return this.setState({list:nextProps})
    }


   

   render()
   { 

   
  
    let c =  this.state.list
    let t = Object.entries(c) ;
    // console.log('this',c)
     
    const el =   () => {
     const data = this.state.list
     let _dataarr ;
     console.log(data)
     if(data.list === undefined){
       console.log("List Undefiend")
     }
     if(data.list !== undefined && data.list !== null)
     {
      if(data.list.length > 0)
      {
        console.log('data length > 0 =>   ', data.list.length)

        _dataarr = data.list.map((task) => {<li>{task.title}</li>}) 
      } 

      if(data.list.length <= 0)
      {
        console.log("Data length < 0 " , data.list.length)
      }
      
      
     }

     if(data.list === null){
       console.log("Null Statud")
     }

    
    //  console.log('data =>   ',data.list)
    }
    
    return(   
         <ul>
           {el}
        </ul>
     )
   }
   
   
  // As question/ 
  
   
}
function renderList(list)
{ 
  if(list instanceof Array)
  {
     console.log(list)
    return list.map((item,index) => {
      <li key={index} taskid={item.id}>{item.title}</li>
    })
  }
  return list
}

export default List;