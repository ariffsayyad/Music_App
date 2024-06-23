import React from "react";
import "../TrackList/TrackList.css"; // Ensure this path is correct
import TrackList from "../TrackList/TrackList"; // Ensure this path is correct

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResult">
        <h2> Results </h2>{" "}
        <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} />{" "}
      </div>
    );
  }
}

export default SearchResults;
