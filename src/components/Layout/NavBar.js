import React from 'react';
class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render()
  {
      return (
          <div className="nav-bar">
             <div className="nav">
                <h5>{'Tasks:'}{5}</h5>
             </div>
          </div>
      )
  }
}

export default NavBar;