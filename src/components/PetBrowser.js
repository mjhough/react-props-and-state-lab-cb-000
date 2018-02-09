import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((p, i) => {
          return <Pet pet={p} key={i} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(p.id)} /> 
        })}
      </div>
    );
  }
}

export default PetBrowser;
