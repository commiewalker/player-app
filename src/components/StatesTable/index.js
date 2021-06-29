import React from 'react';
import "./styles.css";
import Row from "../Row"

export default function StatsTable(props) {
    return (
        <div className="StateTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {props.players.map(player => <Row player={player}></Row>) }                
                </tbody>
            </table>
        </div>
    )
}