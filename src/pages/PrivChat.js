import React, { useState, useEffect } from 'react';
import actions from '../api';

function PrivChat(props){
const [users, setUsers]=useState([])
const [allMessages, setAllMessages]=useState([])
const [currentMessage, setCurrentMessage]=useState('')
const [roomId, setRoomId] = useState('')
let messageEnd = React.createRef()

let scrollToBottom = () => {
    messageEnd.scrollIntoView({behaviour: 'smooth'})
}
const user = props.location.state.user 
const {socket} = actions
const {privateId} = props.match.params
useEffect(() => {
   let getData = async () => {
    try{
        let users = await actions.getPrivateLobby(privateId)
        await setRoomId(users.data._id)
        await setUsers(users.data.users)
        let response = await actions.allMessages(roomId) 
        await setAllMessages(response.data)
        scrollToBottom()     
    } catch(error){
        console.log(error)
    }
   } 
   getData() 
    socket.emit('joinChat', roomId)
    socket.on('receiveMessage', async (data) => {
    await setAllMessages([...allMessages, data])
    scrollToBottom()
    })
}, [])

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
    scrollToBottom()
}


return (
        <>
            {
            allMessages.map((val,i) => {
                console.log(val)
                return (
                    <div key={i} className={`messageContainer ${val.sender.username === user.username ?"you" : "other"}`} 
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
            ref={(el) => {messageEnd = el}}>
        </div>
        <div className="messageInputs">
            <form onSubmit = {onSendMessage} noValidate>
                <input value={currentMessage} type="text" placeholder="Message..."
                    onChange={handleMessageInput}
                />
                <button onClick={sendMessage}>Send</button>
            </form>
        </div>
        </>
    )
}

export default PrivChat