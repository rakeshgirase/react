import React, { Component } from "react";
import { moviesLoaded } from "./actions";
import MovieRow from "./MovieRow";
import { connect } from "react-redux"
import { ajax } from "rxjs/ajax"

class MovieList extends Component {

  componentDidMount() {
    ajax.getJSON("/api/movies").subscribe(movies => this.props.moviesLoaded(movies));
  }

  render() {
    const rows = this.props.movies.map(movie => (
      <MovieRow
        key={movie.id}
        movie={movie}
        toEditMode={this.props.toEditMode}
      />
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Directors</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}


const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesLoaded: movies => dispatch(moviesLoaded(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
