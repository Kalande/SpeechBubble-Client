import {useEffect, useState} from 'react';
import actions from '../api'
import {Link} from 'react-router-dom';

function HomePage(props) {

 //App.js?
    const [user, setUser]=useState({})

 const handleUserSubmit = async e =>{
        e.preventDefault()
        let res = await actions.newUser(user)
        console.log(user);
    }
 
   const [openHost, setOpenHost]=useState(false)
    const [openPublic, setOpenPublic]=useState(false)
    const [openPrivate, setOpenPrivate]=useState(false)
    
    return (
        <div className='homePage'>
           <div className='homePageOptions'>
               <Link style={{height:'10vh'}} to='/host/topics'>
                   <div onMouseOver={()=> setOpenHost(!openHost)} onMouseLeave={()=> setOpenHost(false)}>
                       <h1 id='host'>Host</h1>
                   </div>
                   {openHost && (
                       <h5>Host a Public or Private Room</h5>
                   )}
               </Link>
               
               <Link style={{height:'10vh'}} to={`/topics`}>
                   <div onMouseOver={()=> setOpenPublic(!openPublic)} onMouseLeave={() => setOpenPublic(false)}>
                      <h1 id='public'>Public</h1>
                   </div>
                   {openPublic && (
                       <h5>Join a Public Room</h5>
                   )}
               </Link>
               
               <Link style={{height:'10vh'}} to={`/privateForm`}>
               <div onMouseOver={()=> setOpenPrivate(!openPrivate)} onMouseLeave={()=> setOpenPrivate(false)}>
                   <h1 id='private'>Private</h1>
               </div>
               {openPrivate && (
                   <h5>Host a Public or Private Lobby</h5>
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