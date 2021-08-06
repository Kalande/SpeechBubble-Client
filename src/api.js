import axios  from "axios";
// import io from 'socket.io-client'


const serverUrl = process.env.NODE_ENV === 'production' ? '' : `http://localhost:5005/api`

const actions = {

    // socket: io('http://localhost:5005'),

    newUser: async user => await axios.post(`${serverUrl}newUser`, user, {withCredentials: true}),
    
    newLobby: async lobby => await axios.post(`${serverUrl}newLobby`, lobby, {withCredentials: true}),

    getLobby: async name => await axios.get(`${serverUrl}lobby/${name}`, {withCredentials: true}),

    getAllLobbies: async topic => await axios.post(`${serverUrl}allLobbies`, {topic},{withCredentials: true}),

    getPrivateLobby: async privateId => await axios.post(`${serverUrl}privateLobby`, privateId ,{withCredentials: true}), /* NEED TO MAKE SERVER ROUTE*/

    userJoinedRoom: async user => await axios.post(`${serverUrl}userJoinedRoom`, user, {withCredentials: true}),

    userLeavesRoom: async user => await axios.post(`${serverUrl}userLeavesRoom`, user, {withCredentials: true}),

    newHost: async host => await axios.post(`${serverUrl}newHost`, host, {withCredentials: true}),

    allMessages: async roomId => await axios.get(`${serverUrl}allLobbyMessages/${roomId}`, {withCredentials: true})

}
export default actions;