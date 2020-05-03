import React, { Component } from 'react'
import './App.css'
import CharacterContainer from './CharacterContainer'

const rickAndMortyURL = "https://rickandmortyapi.com/api/character"

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch(rickAndMortyURL)
      .then(response => response.json())
      .then(json => this.setState({ characters: json.results }))
  }
  render() {
    return (
      <div className="App">
        <CharacterContainer characters={this.state.characters} />
      </div>
    )
  }

}

export default App
