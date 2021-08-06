import {useState, useEffect, Children} from "react";
import { Link } from "react-router-dom";
import sports from "../components/img/themes_sports.svg"
import others from "../components/img/themes_others.svg"
import tobereplaced from "../components/img/themes_tobereplaced.png"
import actions from '../api'
// HOME => PERSON CHOOSE BETWEEN HOST, PUBLIC OR PRIVATE
// Acording to user choices => add host OR public OR private as route params

function Topics (props){
    const [othersOpen, setOthersOpen]=useState(false)
    const [sportsOpen, setSportsOpen]=useState(false)
    const [trendingOpen, setTrendingOpen]=useState(false)
    const [showsOpen, setShowsOpen]=useState(false)
    const [others, setOthers]=useState({})
    const [trending, setTrending]=useState({})
    const [sports, setSports]=useState({})
    const [shows, setShows]=useState({})
    const [newTopic, setNewTopic]=useState('')
    
    const handleOthersChange = e => {
        let newOthers = {...others}
        newOthers[e.target.name]=e.target.value
        setOthers(newOthers)
    }

    console.log(others);
    const handleOthersSubmit = e => {
        e.preventDefault()
        actions.newLobby(others)
    }

    const handleClick = e => {

        setNewTopic(e.target.value)
    }
    console.log(newTopic);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Pick Your Topic</h1>
            <div className='topics'>
                    <div className='topicsRow-1'>
                        {/* <Link style={{padding:'1em 5em'}}to={`/sports/Hostform`}>
                            <img src={sports} alt="sports balls" />
                        <h1>Sports</h1>
                        </Link>
                        <Link style={{padding:'1em 5em'}} to={`/shows&movies/Hostform`}>
                            <img src={''} alt="TO UPDATE" />
                        <h1>Shows & Movies</h1>
                        </Link>
                    </div>
           
                <div className='topicsRow-2'>
                    <Link style={{padding:'1em 5em'}} to={`/trending/Hostform`}>
                            <img src={''} alt="TO UPDATE" />
                        <h1>Trending</h1>
                        </Link> */}
                        
                        <Link name='others' style={{padding:'1em 5em'}} onClick={(e)=> {setOthersOpen(!othersOpen); handleClick(e)}}>
                            <img src={others} alt="a frog" />
                        <h1>Others</h1>
                        </Link>
                        {othersOpen &&(
                            <form className='hiddenForm'onSubmit={handleOthersSubmit}>
                                <input onChange={handleClick} name='topic' value={newTopic}/>
                                <input onChange={handleOthersChange} type='text' name='name'/>
                                <input onChange={handleOthersChange} type='text' name='subject'/>
                                <input onChange={handleOthersChange} type='number' name='limit'/>
                                <input onChange={handleOthersChange} type='text' name='question'/>
                                <input onChange={handleOthersChange} type='text' name='answer'/>
                                <select>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>
                                <button>Create Room</button>
                            </form>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Topics