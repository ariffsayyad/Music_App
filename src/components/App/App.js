import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import Playlist from "../Playlist/Playlist";
import SavePlaylist from "./SavePlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResult: [],
      PlaylistName: "",
      Playlist: [],
    };
    this.Search = this.Search.bind(this);
    this.doThese = this.doThese.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.SavePlaylist = this.SavePlaylist.bind(this);
  }

  Search(term) {
    fetch(
      `https://itunes.apple.com/search?term=${term}&media=music&entity=song`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ SearchResult: data.results });
      });
  }

  doThese(song) {
    this.setState((prevState) => ({
      Playlist: [...prevState.Playlist, song],
    }));
  }

  updatePlaylistName(event) {
    this.setState({ PlaylistName: event.target.value });
  }

  SavePlaylist() {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.PlaylistName,
        songs: this.state.Playlist,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Playlist saved:", data);
      })
      .catch((error) => {
        console.error("Error saving playlist:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>
          <a href="http://localhost:3000"> musicophile </a>{" "}
        </h1>{" "}
        <div className="App">
          <SearchBar onSearch={this.Search} />{" "}
          <div className="App-playlist">
            <SearchResult
              SearchResult={this.state.SearchResult}
              onAdd={this.doThese}
            />{" "}
            <Playlist
              PlaylistName={this.state.PlaylistName}
              onNameChange={this.updatePlaylistName}
            />{" "}
          </div>{" "}
          <SavePlaylist onSave={this.SavePlaylist} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
