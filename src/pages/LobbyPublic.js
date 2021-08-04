import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./lobby.css";

// HOME => PERSON CHOOSE BETWEEN HOST, PUBLIC OR PRIVATE
// Acording to user choices => add host OR public OR private as route params

// const { id } = props.match.params

function LobbyPublic (props){
    // VERIFY PROPERTY NAMES WITH FORMS AND MODELS(BACK)
    // "get" room data from API  

    const [rooms, setRooms] = useState([]);

    //response vai vir do get 
    const response = [{
        topic: "MEMES",
        subtopic: "POST YOUR DARKEST MEMES BELOW AND LEST LAUGH",
        maximumAmountOfPeople: 10,
        onTimeAmountOfPeople: 9,
        pictureUrl:"https://www.thecoderpedia.com/wp-content/uploads/2020/06/StackOverFlow-Jokes-832x1024.jpg",
        padlockIcon: "fa-unlock",
        status: "JOIN"
        }, {
            topic: "MEMES",
            subtopic: "POST YOUR DARKEST MEMES BELOW AND LEST LAUGH",
            maximumAmountOfPeople: 10,
            onTimeAmountOfPeople: 7,
            pictureUrl:"https://www.thecoderpedia.com/wp-content/uploads/2020/06/StackOverFlow-Jokes-832x1024.jpg",
            padlockIcon: "fa-unlock",
            status: "JOIN"
            }
        ]

    useEffect(() => {
        //to include GET route => get all public rooms => rerturn response 
        setRooms([...response]);
      }, []);

    console.log(rooms)

    //status - changes between JOIN or FULL according to onTimeAmountOfPeople in the room.
    // padlock open = "fas fa-unlock"
    // padlock closed = "fas fa-lock"
    // GET ROUTE - take all public rooms => update state rooms with information from get and setRooms() 

    // PUT ROUTE - onClick of button JOIN - update propert onTimeAmountOfPeople (+1)
    // while onTimeAmountOfPeople < maximumAmountOfPeople
    // if onTimeAmountOfPeople (after PUT - person enter the room) = maximumAmountOfPeople
    // toogle JOIN para FULL e close the room. 
    // if anyone left => onTimeAmountOfPeople < maximumAmountOfPeople => toogle to JOIN.

    // onClick (JOIN) => also redirects to the room => insert value of propert "topic" as route params 
    // to direct to the right room. 

    // toogle also for the locker picture (padlock opened and padlock closed)

    //cloudinary => to upload picture? ou permitir apenas url?


    function handleJoin (click) {
        console.log(click.target.id)


        let {onTimeAmountOfPeople, maximumAmountOfPeople} = rooms[click.target.id]
        console.log(onTimeAmountOfPeople, maximumAmountOfPeople)

        onTimeAmountOfPeople  = onTimeAmountOfPeople + 1
        console.log(onTimeAmountOfPeople)
        console.log(rooms[click.target.id])

        setRooms([
            {...rooms[click.target.id]},
            onTimeAmountOfPeople
        ]
        )

        // route params = rooms.topic => In the backend => Model => topic must be unique  
        // props.history.push(`/room/${rooms.topic}`);

        const status = "FULL"
        const padlockIcon = "fa-lock" 

        //state is not being updated
        console.log(rooms) 
        console.log(rooms[click.target.id])

        if(onTimeAmountOfPeople === maximumAmountOfPeople){
            console.log(onTimeAmountOfPeople, maximumAmountOfPeople)
            setRooms([
                {...rooms[click.target.id]},
                status,
                padlockIcon
            ])
        }
    }
    console.log(rooms)

    return (
        <div>
            <h1 className="m-3">Public</h1>
            <Link className="fas fa-angle-double-left p-4 d-flex justify-content-start" to="/"/>
            <ul className="container-ul">
            {/* rooms is the state update with all ongoing rooms */}
            {
            rooms.length ? ( 
                rooms.map((eachRoom, index) => {
                    return (
                        <li key={index} className="container-li" style={{listStyle: "none"}}>
                            <img className="img-fluid rounded-circle img-room" src={eachRoom.pictureUrl} alt={eachRoom.topic}/>
                            <h2 className="font-size">{`${eachRoom.topic} / ${eachRoom.subtopic}`}</h2>
                            <i className={`fas ${eachRoom.padlockIcon} font-size`}></i>
                            <h2 className="font-size"> {`${eachRoom.onTimeAmountOfPeople} / ${eachRoom.maximumAmountOfPeople}`}</h2>
                            <button onClick={handleJoin}>
                                <h2 className="font-size" id={index}>{eachRoom.status}</h2>
                            </button>
                        </li>
                    )
                })
             ) : 
                (
                    <header className="container d-flex justify-content-center">
                        <h2 className="no-rooms d-flex wrap mb-4">There is no room available yet. Come back to the homepage to host a room!</h2>
                        <Link className="fas fa-angle-double-left pr-4" to="/"/>
                    </header>
                )
                }
            </ul>
        </div>
    )
}

export default LobbyPublic

// Titulo "PUBLIC" or "Private"
// Qdo Host preenche o fomulario e submete para CRIAR a sala => envia as informações pra api
// Aqui no Lobby, vai renderizar as informações que puxa do back (tudo que tiver com a propriedade public 
//     e outra página com a propriedade PRIVATE - nessa precisa conferir o id pra entrar na sala)

// Array de salas (toda vez que cria uma nova sala, envia o id da sala pro Model Public) (or Model Lobby?)

//     Cada pessoa que entra na sala, a propriedade n de pessoas dessa sala é atualizada para 
//     - PUT pra atualizar o n de pessoas