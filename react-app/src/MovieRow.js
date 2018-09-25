import React, { Component } from "react";

class MovieRow extends Component {
  toEditMode = () => {
    this.props.toEditMode({ id: this.props.movie.id });
  }

  render() {
    const movie = this.props.movie;

    return (
      <tr>
        <td><img src={movie.posters.thumbnail} alt="poster"></img></td>
        <td>{movie.title}</td>
        <td>{movie.abridgedDirectors.join(", ")}</td>
        <td style={{ width: 1 }}>
          <button
            onClick={this.toEditMode}
            className="btn btn-default btn-xs edit-button"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
