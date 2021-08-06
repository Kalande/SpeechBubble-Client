import TextInput from "./props.form/TextInput";
import SelectInput from "./props.form/SelectInput";
import {useEffect, useState} from 'react'
import actions from '../api'

function HostForm(props) {

  const handleLobbySubmit = async e =>{
      e.preventDefault()
      try{
        let lobby = {
          name: e.target.name.value,
          topic: e.target.topic.value,
          subject: e.target.subject.value,
          limit: e.target.limit.value,
          private: e.target.private.value,
          question: e.target.question.value,
          answer: e.target.answer.value
        }
        let res = await actions.newLobby(lobby)
      props.history.push({
        pathname: `/lobby/${res.data.name}`,
        state: { user: props.location.state.user}
      })
      } catch (error){
        console.log(error.data)
      }
      
  }

  return (
    <form onSubmit={handleLobbySubmit}>
    <h3>New Lobby</h3>
     <h5>Topic</h5>
     <input type='text' value={props.match.params.topic} name='topic'/>
     <h5>Subject</h5>
     <input type='text' name='subject'/>
     <h5>Name</h5>
     <input type='text' name='name'/>
     <h5>Limit</h5>
     <input type='number' name='limit'/>
     <h5>Question</h5>
     <input type='text' name='question'/>
     <h5>Answer</h5>
     <input type='text' name='answer'/>
     <h5>Private?</h5>
     <select name='private'>
         <option value={true}>Yes</option>
         <option value={false}>No</option>
     </select>
     <br></br>
     <button type="submit">Create Lobby</button>
</form>
  )

}
export default HostForm;
