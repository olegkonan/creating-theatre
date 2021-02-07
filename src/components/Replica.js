import React from 'react';
import Select from 'react-select';

export class Replica extends React.Component {
  render() {
    return (
      <aside className="col-sm-8 mt-3 bg-light">
        <h5 className="text-center">Добавление реплик</h5>
        <form className="d-flex flex-column">
          <label className="align-self-center mb-0" htmlFor="act">Акт</label>
          <Select 
            options={new Array(parseInt(this.props.actsCount)).fill("1").map((key, index) => {
              return {
                value: index + 1, label: index + 1
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="scene">Сцена</label>
          <Select 
            options={new Array(parseInt(this.props.scenesCount)).fill("1").map((key, index) => {
              return {
                value: index + 1, label: index + 1
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="character">Персонаж</label>
          <Select 
            options={this.props.characters.map((character) => {
              return {
                value: character.name, label: character.name
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="text">Реплика</label>
          <textarea 
            className="form-control" 
            name="" 
            id="text" 
            cols="30" 
            rows="10"
          >

          </textarea>
          <button 
            className="btn btn-sm btn-dark" 
            type="submit"
          >
            Добавить реплику
          </button>
        </form>
      </aside>
    )
  }
}