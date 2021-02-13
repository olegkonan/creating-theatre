import React from 'react';


export class Parameters extends React.Component {

  changeActsCount = e => {
    const actsCount = e.target.value;
    if (actsCount > 0) { 
      this.props.updateActsCount(e.target.value);
      localStorage.setItem('acts', e.target.value);
    }
  }

  changeScenesCount = e => {
    const scenesCount = e.target.value;
    if (scenesCount > 0) { 
      this.props.updateScenesCount(e.target.value);
      localStorage.setItem('scenes', e.target.value);
    }
  }

  addCharacter = e => {
    this.props.updateCharacter(e.target)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateCharacters();
  }

  render() {
    return (
      <div className="container-lg d-flex flex-column bg-light">
        <h5 className="align-self-center text-center">Параметры пьесы</h5>
        <div className="input-group input-group-sm mb-1 align-self-center col-sm-5">
          <input 
            className="form-control" 
            type="number" 
            value={this.props.actsCount} 
            onChange={this.changeActsCount}
          />
          <span className="mr-1">акта(ов)</span>
          <input 
            className="form-control" 
            type="number" 
            value={this.props.scenesCount} 
            onChange={this.changeScenesCount}
          />
          <span className="">сцен(ы)</span>
        </div>
        <form 
          className="d-flex justify-content-between align-items-center"
          onSubmit={this.handleSubmit}
        >
          <div className="input-group input-group-sm col-sm-3">
            <label className="mr-1" htmlFor="character">Персонаж</label>
            <input 
              className="form-control" 
              type="text" 
              name="name" 
              id="character" 
              value={this.props.character.name}
              onChange={this.addCharacter}
            />
          </div>
          <div className="input-group input-group-sm col-sm-6">
            <label className="mr-1" htmlFor="characteristic">Характеристика персонажа</label>
            <input 
              className="form-control" 
              type="text" 
              name="description"
              id="characteristic" 
              value={this.props.character.description}
              onChange={this.addCharacter}
            />
          </div>
          <button 
            className="btn btn-dark btn-sm" 
            type="submit"
            disabled={!this.props.character.name}
          >
            Добавить персонажа
          </button>
        </form>
      </div>
    )
  }
  
}