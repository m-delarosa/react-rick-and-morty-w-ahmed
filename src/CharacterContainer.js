import React from "react"
import CharacterCard from "./CharacterCard"

export default function CharacterContainer(props) {


    return (
        <section>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </section>
    )
}