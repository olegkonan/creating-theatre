import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';


export const Replica = ({actsCount, scenesCount, characters}) => {
  const [currentReplica, updateCurrentReplicaFull] = useState({
    act: 1,
    scene: 1,
    character: "",
    text: ""
  })
  const [isSubmitAllowed, changePermissionForSubmit] = useState(false);

  const pullData = async () => {
    const resData = JSON.stringify(currentReplica);
    try {
      await axios.post('https://create-scenario-default-rtdb.firebaseio.com/play.json', resData)
      console.log('Данные успешно записаны');
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    !currentReplica.text.trim() ? changePermissionForSubmit(false) : changePermissionForSubmit(true)
  }, [currentReplica.text])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({currentReplica});
    updateCurrentReplicaFull({
      ...currentReplica,
      text: ""
    })
    pullData();
  }

  return (
    <aside className="col-sm-8 mt-3 bg-light">
      <h5 className="text-center">Добавление реплик</h5>
      <form 
        className="d-flex flex-column"
        onSubmit={handleSubmit}
      >
        <label className="align-self-center mb-0" htmlFor="act">Акт</label>
        <Select 
          name="act"
          placeholder="Выберите акт"
          onChange={(option) => updateCurrentReplicaFull({
            ...currentReplica,
            act: option.value
          })}
          options={new Array(actsCount).fill("1").map((key, index) => {
            return {
              value: index + 1, label: index + 1
            }
          })} />
        <label className="align-self-center mb-0" htmlFor="scene">Сцена</label>
        <Select 
          name="scene"
          placeholder="Выберите сцену"
          onChange={(option) => updateCurrentReplicaFull({
            ...currentReplica,
            scene: option.value
          })}
          options={new Array(scenesCount).fill("1").map((key, index) => {
            return {
              value: index + 1, label: index + 1
            }
          })} />
        <label className="align-self-center mb-0" htmlFor="character">Персонаж</label>
        <Select 
          name="character"
          placeholder="Выберите персонажа"
          onChange={(option) => updateCurrentReplicaFull({
            ...currentReplica,
            character: option.value
          })}
          options={characters.map((character) => {
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
          onChange={(e) => updateCurrentReplicaFull({
            ...currentReplica,
            text: e.target.value
          })}
          value={currentReplica.text}
        >
          
        </textarea>
        <button 
          disabled={!isSubmitAllowed}
          className="btn btn-sm btn-dark" 
          type="submit"
        >
          Добавить реплику
        </button>
      </form>
    </aside>
  )
}