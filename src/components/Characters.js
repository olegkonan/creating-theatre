import React from 'react';

export class Characters extends React.Component {
  render() {
    return (
      <aside className="col-sm-4 mt-3 bg-light">
        <h5 className="text-center">Действующие лица</h5>
        <div className="characters">
          {this.props.characters.map((character, index) => {
            return (
              <p key={index}>{character.name}: {character.description}</p>
            )
          })}
        </div>
        <button 
          className="btn btn-sm btn-dark" 
          type="button"
          onClick={this.props.deleteCharacters}
        >
          Удалить персонажей
        </button>
      </aside>
    )
  }
}