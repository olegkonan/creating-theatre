import React, { Fragment } from 'react'
import { Parameters } from '../components/Parameters'
import { Replica } from '../components/Replica'
import { Characters } from '../components/Characters'

export class CreateScenario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acts: JSON.parse(localStorage.getItem('acts')) || 0,
      character: {
        name: "",
        description: ""
      },
      characters: JSON.parse(localStorage.getItem('characters')) || []
    }
  }

  updateActsCount = (acts) => {
    this.setState({ acts })
  }

  updateCharacter = (newCharacter) => {
    let character = Object.assign({}, this.state.character);
    const {name, value} = newCharacter;
    character[name] = value;
    return this.setState({character});
  }

  updateCharacters = () => {
    this.setState(state => {
      const characters = state.characters.concat(this.state.character);
      localStorage.setItem('characters', JSON.stringify(characters));
      return {
        character: {
          name: "",
          description: ""
        },
        characters
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Parameters 
          actsCount={this.state.acts} 
          character={this.state.character} 
          updateActsCount={this.updateActsCount} 
          updateCharacter={this.updateCharacter} 
          updateCharacters={this.updateCharacters}
        />
        <div className="d-flex main">
          <Replica />
          <Characters />
        </div>
      </Fragment>
    )
  }
}