import {useState, useEffect, Children} from "react";
import { Link } from "react-router-dom";
import sports from "../components/img/themes_sports.svg"
import others from "../components/img/themes_others.svg"
import tobereplaced from "../components/img/themes_tobereplaced.png"
import actions from '../api'
// HOME => PERSON CHOOSE BETWEEN HOST, PUBLIC OR PRIVATE
// Acording to user choices => add host OR public OR private as route params

function HostTopics (props){
    const [others, setOthers]=useState({})
    const [trending, setTrending]=useState({})
    const [sports, setSports]=useState({})
    const [shows, setShows]=useState({})

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Pick Your Topic</h1>
            <div className='topics'>
                    <div className='topicsRow-1'>
                        <Link style={{padding:'1em 5em'}}to={`/create/sports`}>
                            <img src={sports} alt="sports balls" />
                        <h1>Sports</h1>
                        </Link>
                        <Link style={{padding:'1em 5em'}} to={`/create/shows&movies`}>
                            <img src={''} alt="TO UPDATE" />
                        <h1>Shows & Movies</h1>
                        </Link>
                    </div>
           
                <div className='topicsRow-2'>
                    <Link style={{padding:'1em 5em'}} to={`/create/trending`}>
                            <img src={''} alt="TO UPDATE" />
                        <h1>Trending</h1>
                        </Link>
                        
                        <Link name='others' to={`/create/others`} style={{padding:'1em 5em'}} >
                            <img src={others} alt="a frog" />
                        <h1>Others</h1>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default HostTopics