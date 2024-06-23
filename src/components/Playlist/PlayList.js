import React from "react";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";
import Playlist from "../components/Playlist/Playlist";

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={this.props.PlaylistName}
          onChange={this.handleNameChange}
        />{" "}
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true} // Adjust based on your TrackList component requirements
          onRemove={this.props.onRemove} // Adjust based on your TrackList component requirements
        />{" "}
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Playlists;
