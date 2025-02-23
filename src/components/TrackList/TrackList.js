import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {" "}
        {this.props.tracks.map((track) => (
          <Track
            track={track}
            key={track.id}
            onAdd={this.props.isRemoval}
            onRemove={this.props.obnRemove}
          />
        ))}{" "}
      </div>
    );
  }
}
export default TrackList;
