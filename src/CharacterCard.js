import React from "react"

export default function CharacterCard(props) {

    return (
        <div className="character-card">
            <img alt={props.character.name} src={props.character.image} />
        </div>
    )
}