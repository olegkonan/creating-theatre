import React from 'react';

export class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <aside className="col-sm-4 mt-3 bg-light">
        <h5 className="text-center">Действующие лица</h5>
        <div className="characters"></div>
        <button className="btn btn-dark" type="button">Удалить персонажей</button>
      </aside>
    )
  }
}