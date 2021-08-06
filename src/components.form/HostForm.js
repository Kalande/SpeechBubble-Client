import TextInput from "./props.form/TextInput";
import SelectInput from "./props.form/SelectInput";
import {useEffect, useState} from 'react'
import actions from '../api'

function HostForm(props) {
  const [lobby, setLobby]= useState({})
  const handleLobbyChange = e => {
      let newLobby = {...lobby}
      newLobby[e.target.name]= e.target.value
      setLobby(newLobby)
      console.log(newLobby);
  }

  const handleLobbySubmit = async e =>{
      e.preventDefault()
      let res = await actions.newLobby(lobby)
      console.log(lobby);
  }

  return (
    <form onSubmit={handleLobbySubmit}>
    <h3>New Lobby</h3>
     <h5>Topic</h5>
     <input type='text' onChange={handleLobbyChange} name='topic'/>
     <h5>subject</h5>
     <input type='text' onChange={handleLobbyChange} name='subject'/>
     <h5>name</h5>
     <input type='text' onChange={handleLobbyChange} name='name'/>
     <h5>Limit</h5>
     <input type='text' onChange={handleLobbyChange} name='limit'/>
     <h5>question</h5>
     <input type='text' onChange={handleLobbyChange} name='question'/>
     <h5>Answer</h5>
     <input type='text' onChange={handleLobbyChange} name='answer'/>
     <h5>Private?</h5>
     <select onChange={handleLobbyChange} name='private'>
         <option value={true}>Yes</option>
         <option value={false}>No</option>
     </select>
     <br></br>
     <button type="submit">Create Lobby</button>
</form>
  )

}
export default HostForm;
