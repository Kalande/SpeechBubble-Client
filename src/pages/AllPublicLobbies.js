import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import actions from "../api";

import "./lobby.css";

function AllPublicLobbies (props) {
    const [userJoin, setUserJoin] = useState(false)
    const [lobbies, setLobbies] = useState([]);
    const [user, setUser]=useState({})
    const [showForm, setForm ] = useState(false)
// spread of it into the lobbies (state).
    //Also, usually I get the "information" that I want accessing "data" key of the response.  
    useEffect(() => {
       async function fetchLobbies() {  
            try{
              let response = await actions.getAllLobbies(props.match.params.topic) 
              setLobbies(response.data)
            } catch(error){
                console.log(error)
            }
          }
        fetchLobbies()
     }, [userJoin])

// n the server), I realize that there is no property that holds the information how many people 
    //font-awesome// is in on time in each lobby(room). 
    
    // padlock open = "fas fa-unlock"
   // also, if the status is JOIN, render the padlock open icon. else, render the padlock closed icon.


   function handleJoin (room) { 
        
    if(room.users.length !== room.limit){
            props.history.push({
                pathname: `/lobby/${room.name}/user`,
                state: {roomId: room._id}
            });
            setUserJoin(!userJoin)
    }
    }

    return (
        <div>
            <h1 className="m-3">Public</h1>
            <Link className="fas fa-angle-double-left p-4 d-flex justify-content-start" to="/"/>

            {
    lobbies.length ? ( 
        lobbies.map((eachRoom, i) => {
            return (
                <div key={i} className="container-li" style={{listStyle: "none"}}>
                    <div className='leftSideLobby'>
                        <img className="img-fluid rounded-circle img-room" src={''} alt={eachRoom.name}/>
                        <h2 className="font-size">{eachRoom.topic}</h2>
                    </div>
                   
                    <div className='rightSideLobby'>
                        {eachRoom.question.length === 0 ? <img src={'https://img.icons8.com/ios11/2x/check-lock.png'} alt='password'/> : <img src={'https://img.icons8.com/ios11/2x/delete-lock.png'} alt='no password'/>}
                        <h2> {`${eachRoom.users.length} / ${eachRoom.limit}`}</h2>
                        <button onClick={() => {handleJoin(eachRoom)}}>
                            {eachRoom.users.length === eachRoom.limit? 'Full' : 'Join'}
                        </button>
                    </div>
                </div>
            )
        })
     ) : 
        (
            <header className="container d-flex justify-content-center">
                <h2 className="no-rooms d-flex wrap mb-4">There is no room available yet. Come back to the homepage to host a room!</h2>
                <Link className="fas fa-angle-double-left pr-4" to="/"/>
            </header>
        )
       }
        </div>
    )
}

export default AllPublicLobbies;
