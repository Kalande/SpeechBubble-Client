import {useEffect, useState} from 'react';
import actions from '../api'

function HomePage(props) {
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

 //App.js?
    const [user, setUser]=useState({})

    const handleUserChange = e => {
        let newUser = {...user}
        newUser[e.target.name]= e.target.value
        setUser(newUser)
        console.log(newUser);
    }

    const handleUserSubmit = async e =>{
        e.preventDefault()
        let res = await actions.newLobby(user)
        console.log(user);
    }

  

    
    const [open, setOpen]=useState({})
    return (
        <div className='homePage'>
           {/* <div className='homePageOptions'>
               <h1>Host</h1>
               <h1>Public</h1>
               <h1>Private</h1>
           </div>
           <
      */}
           <form onSubmit={handleUserSubmit} className='userForm'>
               <h3>User</h3>
               <h5>username</h5>
               <input onChange={handleUserChange} type='text' name='username'/>
               <h5>description</h5>
               <input onChange={handleUserChange} type='text' name='description'/>
               <h5>image</h5>
               <input onChange={handleUserChange} type='file' name='image'/>
               <br></br>
               <input type='submit'/>

           </form>
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
                <input type='text' onChange={handleLobbyChange} name='private'/>
                <h5>Host</h5>
                <input type='text' onChange={handleLobbyChange} name='host'/>
                <br></br>
                <button>Create Lobby</button>
           </form>
        </div>
    );
}

export default HomePage;