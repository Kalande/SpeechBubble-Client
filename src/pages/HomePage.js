import {useEffect, useState} from 'react';
import actions from '../api'
import {Link} from 'react-router-dom';

function HomePage(props) {

 //App.js?
    const [user, setUser]=useState({})

    const handleUserChange = e => {
        let newUser = {...user}
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }
console.log(user);
    const handleUserSubmit = async e =>{
        e.preventDefault()
        let res = await actions.newUser(user)
        console.log(user);
    }

  console.log(props.match.params);

    
    const [openHost, setOpenHost]=useState(false)
    const [openPublic, setOpenPublic]=useState(false)
    const [openPrivate, setOpenPrivate]=useState(false)
    
    return (
        <div className='homePage'>
           <div className='homePageOptions'>
               <Link to={`${{}}/topics`}>
                   <h1 onMouseOver={()=> setOpenHost(!openHost)} onMouseLeave={()=> setOpenHost(false)}>
                       Host
                   </h1>
                   {openHost && (
                       <h3>Host a Public or Private Room</h3>
                   )}
                   
               </Link>
               
               <Link to='/topics/Public'>
                   <h1 onMouseOver={()=> setOpenPublic(!openPublic)} onMouseLeave={()=> setOpenPublic(false)}>
                      Public
                   </h1>
                   {openPublic && (
                       <h3>Join a Public Room</h3>
                   )}
               </Link>
               
               <Link to='/topics/Public'>
               <h1 onMouseOver={()=> setOpenPrivate(!openPrivate)} onMouseLeave={()=> setOpenPrivate(false)}>
                   Private
               </h1>
               {openPrivate && (
                   <h3>Host a Public or Private Lobby</h3>
               )}
               </Link>
           </div>
           
     
           {/* <form onSubmit={handleUserSubmit} className='userForm'>
               <h3>User</h3>
               <h5>username</h5>
               <input onChange={handleUserChange} type='text' name='username'/>
               <h5>description</h5>
               <input onChange={handleUserChange} type='text' name='description'/>
               <h5>image</h5>
               <input onChange={handleUserChange} type='file' name='image'/>
               <br></br>
               <button>Create User</button>

           </form> */}
          
        </div>
    );
}

export default HomePage;