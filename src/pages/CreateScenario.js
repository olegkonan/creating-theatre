import React, { Fragment } from 'react'
import { Parameters } from '../components/Parameters'
import { Replica } from '../components/Replica'
import { Characters } from '../components/Characters'

export class CreateScenario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acts: JSON.parse(localStorage.getItem('acts')) || 1,
      scenes: JSON.parse(localStorage.getItem('scenes')) || 1,
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

  updateScenesCount = (scenes) => {
    this.setState({ scenes })
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

  deleteCharacters = () => {
    localStorage.removeItem('acts');
    this.setState({characters: []});
  }

  render() {
    return (
      <Fragment>
        <Parameters 
          actsCount={this.state.acts} 
          scenesCount={this.state.scenes} 
          character={this.state.character} 
          updateActsCount={this.updateActsCount} 
          updateScenesCount={this.updateScenesCount}
          updateCharacter={this.updateCharacter} 
          updateCharacters={this.updateCharacters}
        />
        <div className="d-flex main">
          <Replica 
            actsCount={this.state.acts} 
            scenesCount={this.state.scenes} 
            characters={this.state.characters}
          />
          <Characters 
            characters={this.state.characters}
            deleteCharacters={this.deleteCharacters}
          />
        </div>
      </Fragment>
    )
  }
}