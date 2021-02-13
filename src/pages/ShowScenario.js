import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ShowScenario = () => {
  const [script, updateScript] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get('https://create-scenario-default-rtdb.firebaseio.com/play.json')

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    updateScript(payload)
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <ul>
      {script.map(element => (
        <li key={element.id}>{element.act}{element.scene}{element.character}{element.text}</li>
      ))}
    </ul>
  )
}