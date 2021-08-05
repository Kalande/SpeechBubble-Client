import axios  from "axios";

const serverUrl =process.env.NODE_ENV === 'production' ? '' : `http://localhost:5005/api/`

const actions = {
    
    newUser: async user => await axios.post(`${serverUrl}/newUser`, user),
    
    newLobby: async lobby => await axios.post(`${serverUrl}/newLobby`, lobby),

    getLobby: async name => await axios.get(`${serverUrl}/lobby/${name}`),

    getAllLobbies: async () => await axios.get(`${serverUrl}/allLobbies`),

    getPrivateLobby: async roomId => await axios.post(`${serverUrl}/privateLobby`), /* NEED TO MAKE SERVER ROUTE*/

    userJoinedRoom: async user => await axios.post(`${serverUrl}/userJoinedRoom`, user),

    userLeavesRoom: async user => await axios.post(`${serverUrl}/userLeavesRoom`, user),

    newHost: async host => await axios.post(`${serverUrl}/newHost`, host)

}
export default actions;