import React from 'react'

function StarshipPage(props){
    return ( 
      <div>
      <h3>{props.location.starshipState.starship.name}</h3>
      <h3>{props.location.starshipState.starship.model}</h3>
      <a href="/">Return</a>
      </div>
     );
  }

 
export default StarshipPage;