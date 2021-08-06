import React, { useState, useEffect } from 'react';
import actions from '../api';
import axios from 'axios'


function RoomChat(props){
const [user, setUser] = useState(props.location.state.user)
const [users, setUsers]=useState([])
const [allMessages, setAllMessages]=useState([])
const [currentMessage, setCurrentMessage]=useState('')
const [roomId, setRoomId] = useState('')
const [topic, setTopic] = useState('')
let messagesEnd = React.useRef()

let scrollIntoView = () => {
    messagesEnd.current.scrollIntoView({behaviour: 'smooth'})
}
const {socket} = actions
let id = props.match.params.id



useEffect(() => {
   let getData = async () => {
    try{
        let users = await actions.getLobby(id)
        await setRoomId(users.data._id)
        setTopic(users.data.topic)
        await setUsers(users.data.users)
        let response = await actions.allMessages(users.data._id) 
        await setAllMessages(response.data)
        scrollIntoView()     
    } catch(error){
        console.log(error)
    }
   } 
   getData() 
}, [])

socket.emit('joinChat', roomId)
    

    socket.on('receiveMessage', async (data) => {
    await setAllMessages([...allMessages, data])
    scrollIntoView()
    })
let handleMessageInput = (e) => {
    setCurrentMessage(e.target.value)
}

let onSendMessage = (event) => {
    event.preventDefault()
}

let sendMessage = async () => {
    // Create the object structure
    if (currentMessage.length === 0){
        return;
    }
    
    let messageContent = {
        roomId: roomId,
        content: {
            sender: user,
            message: currentMessage,
            
        },
        };

    await socket.emit("sendMessage", messageContent);
    await setAllMessages([...allMessages, messageContent.content])
    await setCurrentMessage('')
    scrollIntoView()
}

let handleLeave = async () => {
    props.history.push(`/lobbies/${topic}`)
    await actions.userLeavesRoom(roomId)
    
}

if(!allMessages){
    return <p>loading</p>
}


return (
        <>
            {
            allMessages.map((val,i) => {
                return (
                    <div key={i} className={`messageContainer ${val.sender.username === user.username ? "you" : "other"}`} 
                    >
                            <span className="sender"> {val.sender.username}</span>
                            <div className="msg">
                                <span>{val.message}</span>
                            </div>

                    </div>
                );
            }) 
            }
            <div style={{ float:"left", clear: "both" }}
            ref={messagesEnd}>
           </div>
           <div className="messageInputs">
            <form onSubmit = {onSendMessage} noValidate>
                <input value={currentMessage} type="text" placeholder="Message..."
                    onChange={handleMessageInput}
                />
                <button onClick={sendMessage}>Send</button>
            </form>
            <button onClick={handleLeave}>Leave</button>
           </div>
        </>
    )
}

export default RoomChat