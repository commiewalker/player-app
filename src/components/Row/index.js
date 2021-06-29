import React from 'react';
import "./styles.css"

export default function Row(props) {
    return (
        <tr>
            <td>{props.player.name}</td>
            <td>{props.player.team}</td>
            <td>{props.player.age}</td>
        </tr>
    )
}