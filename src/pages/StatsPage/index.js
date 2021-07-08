import React, {useState, useEffect} from 'react';
import "./style.css";
import StatsTable from '../../components/StatesTable'
import API from "../../utils/API"

export default function StatsPage(props) {

    const [playerState, setPlayerState] = useState([]);

    useEffect(() =>{
        API.getAllPlayers().then( res=> {
            console.log(res.data)
            setPlayerState(res.data)
        }).catch(err => {
            console.log(err);
        })
    })

    return (
        <div className="statePage">
            <form>
                <input type='number' placeholder='id search'></input>                
            </form>
            <button>Add Player</button>
            <h3>State Table</h3>
            {/* <StatsTable players={[
                {
                    id:1,
                    name:"Cristiano",
                    team:"JUV",
                    age:35
                },
                {
                    id:2,
                    name:"Messi",
                    team:"BAR",
                    age:32
                },
                {
                    id:3,
                    name:"Werner",
                    team:"CHE",
                    age:22
                },
                {
                    id:4,
                    name:"Kai",
                    team:"CHE",
                    age:21
                },
            ]}/> */}

            <StatsTable players= {playerState}/>

        </div>
    )
}