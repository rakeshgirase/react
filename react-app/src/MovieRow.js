import React, { Component } from "react";
import {Link} from "react-router-dom";

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
      <Link
        className="btn btn-default btn-xs edit-button"
        to={`/movie/${movie.id}`}
      >
        Edit
      </Link>
    </td>
      </tr>
    );
  }
}

export default MovieRow;
