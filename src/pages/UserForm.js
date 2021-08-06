import React, {useState, useEffect} from 'react'
import actions from '../api'


function UserForm(props) {
const [user, setUser] = useState({})
    
const handleUserChange = e => {
    let newUser = {...user}
    newUser[e.target.name] = e.target.value
    setUser(newUser)
}

const handleUserSubmit = async e =>{
    e.preventDefault()
    let res = await actions.newUser(user)
    if(props.match.params.name){
        await actions.userJoinedRoom(props.location.state.roomId)
    }
    props.history.push({
        pathname: window.location.pathname !== `/create/:topic`? `/lobby/${props.match.params.name}` : `/create/${props.match.params.topic}/hostForm`,
        state: {user: res.data}
    })
}

    return (
        <>       
           <form onSubmit={handleUserSubmit} className='userForm'>
               <h3>User</h3>
               <h5>username</h5>
               <input onChange={handleUserChange} type='text' name='username'/>
               <h5>description</h5>
               <input onChange={handleUserChange} type='text' name='description'/>
               <br></br>
               <button>Create User</button>

           </form>
        </>
    )
}

export default UserForm

