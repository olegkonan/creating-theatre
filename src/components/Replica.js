import React from 'react';
import Select from 'react-select';

export class Replica extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      act: 1,
      scene: 1,
      character: "",
      replica: ""
    }
  }

  updateCurrentAct = (selectedValue) => {
    this.setState({
      act: selectedValue.value
    })
  }

  updateCurrentScene = (selectedValue) => {
    this.setState({
      scene: selectedValue.value
    })
  }

  updateCurrentCharacter = (selectedValue) => {
    this.setState({
      character: selectedValue.value
    })
  }

  updateCurrentReplica = (e) => {
    this.setState({replica: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let receivedData = Object.assign({}, this.state);
    console.log(receivedData);
    this.setState({
      replica: ""
    })
  }

  render() {
    return (
      <aside className="col-sm-8 mt-3 bg-light">
        <h5 className="text-center">Добавление реплик</h5>
        <form 
          className="d-flex flex-column"
          onSubmit={this.handleSubmit}
        >
          <label className="align-self-center mb-0" htmlFor="act">Акт</label>
          <Select 
            name="act"
            placeholder="Выберите акт"
            onChange={this.updateCurrentAct}
            options={new Array(parseInt(this.props.actsCount)).fill("1").map((key, index) => {
              return {
                value: index + 1, label: index + 1
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="scene">Сцена</label>
          <Select 
            name="scene"
            placeholder="Выберите сцену"
            onChange={this.updateCurrentScene}
            options={new Array(parseInt(this.props.scenesCount)).fill("1").map((key, index) => {
              return {
                value: index + 1, label: index + 1
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="character">Персонаж</label>
          <Select 
            name="character"
            placeholder="Выберите персонажа"
            onChange={this.updateCurrentCharacter}
            options={this.props.characters.map((character) => {
              return {
                value: character.name, label: character.name
              }
            })} />
          <label className="align-self-center mb-0" htmlFor="text">Реплика</label>
          <textarea 
            className="form-control" 
            name="replica" 
            id="text" 
            cols="30" 
            rows="10"
            onChange={this.updateCurrentReplica}
            value={this.state.replica}
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