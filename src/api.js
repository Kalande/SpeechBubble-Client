import axios  from "axios";
import io from 'socket.io-client'


const serverUrl = process.env.NODE_ENV === 'production' ? '' : `http://localhost:5005`

const actions = {

    socket: io(`${serverUrl}`),

    newUser: async user => await axios.post(`${serverUrl}/api/newUser`, user, {withCredentials: true}),
    
    newLobby: async lobby => await axios.post(`${serverUrl}/api/newLobby`, lobby, {withCredentials: true}),

    getLobby: async name => await axios.get(`${serverUrl}/api/lobby/${name}`, {withCredentials: true}),

    getAllLobbies: async topic => await axios.post(`${serverUrl}/api/allLobbies`, {topic},{withCredentials: true}),

    getPrivateLobby: async privateId => await axios.post(`${serverUrl}/api/privateLobby`, privateId ,{withCredentials: true}), /* NEED TO MAKE SERVER ROUTE*/

    userJoinedRoom: async user => await axios.post(`${serverUrl}/api/userJoinedRoom`, user, {withCredentials: true}),

    userLeavesRoom: async user => await axios.post(`${serverUrl}/api/userLeavesRoom`, user, {withCredentials: true}),

    newHost: async host => await axios.post(`${serverUrl}/api/newHost`, host, {withCredentials: true}),

    allMessages: async roomId => await axios.get(`${serverUrl}/api/allLobbyMessages/${roomId}`, {withCredentials: true})

}
export default actions;