import React, { Component } from 'react'
import { getAllStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class AllStarships extends Component {
  state = { 
    allStarships: []
   }
  
   async componentDidMount() {
     // api call go here
     const allStarships = await getAllStarships();
     console.log(allStarships)
     this.setState({allStarships: allStarships.results})
   }

  render() { 
    return ( 
      <>
        {this.state.allStarships.map((starship, idx) => 
          <button id="starships" key={idx}>
            <Link
              to={{ 
                pathname: '/starship',
                starshipState: { starship }
             }}
            >
            {starship.name}
            </Link>
          </button>
        )}
      </>
     );
  }
}
 
export default AllStarships;