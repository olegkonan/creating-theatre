import React from 'react';
import Select from 'react-select';

export class Replica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acts: 3,
      character: "Someone"
    }
  }

  render() {
    return (
      <aside className="col-sm-8 mt-3 bg-light">
        <h5 className="text-center">Добавление реплик</h5>
        <form className="d-flex flex-column">
          <label className="align-self-center mb-0" htmlFor="act">Акт</label>
          <Select 
            options={new Array(this.state.acts).fill("1").map((key, index) => {
              return {
                value: index + 1, label: index + 1
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="scene">Сцена</label>
          <input 
            className="form-control form-control-sm" 
            type="number" 
            name="" 
            id="scene" 
          />
          <label className="align-self-center mb-0" htmlFor="character">Персонаж</label>
          <select 
            className="form-control form-control-sm" 
            name="character" 
            id=""
          >

          </select>
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