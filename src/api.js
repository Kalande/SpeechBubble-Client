import axios  from "axios";
import io from 'socket.io-client'


const serverUrl = process.env.REACT_APP_SERVER_URL

const actions = {

    socket: io(`${serverUrl}`),

    newUser: async user => await axios.post(`${serverUrl}/api/newUser`, user, {withCredentials: true}),
    
    newLobby: async lobby => await axios.post(`${serverUrl}/api/newLobby`, lobby, {withCredentials: true}),

    getLobby: async id => await axios.get(`${serverUrl}/api/lobby/${id}`, {withCredentials: true}),

    getAllLobbies: async topic => await axios.post(`${serverUrl}/api/allLobbies`, {topic},{withCredentials: true}),

    getPrivateLobby: async privateId => await axios.post(`${serverUrl}/api/privateLobby`, privateId ,{withCredentials: true}), /* NEED TO MAKE SERVER ROUTE*/

    userJoinedRoom: async roomId => await axios.post(`${serverUrl}/api/userJoinedRoom`, {roomId}, {withCredentials: true}),

    userLeavesRoom: async roomId => await axios.post(`${serverUrl}/api/userLeavesRoom`, {roomId}, {withCredentials: true}),

    newHost: async host => await axios.post(`${serverUrl}/api/newHost`, host, {withCredentials: true}),

    allMessages: async roomId => await axios.get(`${serverUrl}/api/allLobbyMessages/${roomId}`, {withCredentials: true})

}
export default actions;