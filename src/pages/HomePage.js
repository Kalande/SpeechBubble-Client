import {useEffect, useState} from 'react';
import actions from '../api'
import {Link} from 'react-router-dom';

function HomePage(props) {

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
        
          
        </div>
    );
}

export default HomePage;