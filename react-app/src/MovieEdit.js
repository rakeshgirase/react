import React, { Component } from "react";
import { Link } from "react-router-dom";

import InputText from "./InputText";
import TextArea from "./TextArea";

class MovieEdit extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    console.log('this.props.movieId' + this.props.match.params.movieId);
    const id = this.props.match.params.movieId;
    fetch("/api/movies/" + id)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie: movie }));
  }

  onChange = e => {
    const movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie: movie });
  };

  onChangeRatings(e) {
    const movie = this.state.movie;
    movie.ratings[e.prop] = e.value;
    this.setState({ movie: movie });
  }

  save = e => {
    e.preventDefault();
    const id = this.props.movieId;
    const movie = this.state.movie;

    fetch("/api/movies/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push("/movies"));
  };

  render() {
    const movie = this.state.movie;
    const ratings = movie.ratings || {};

    return (
      <form>
        <InputText onChange={this.onChange} prop="title" value={movie.title}>
          Title
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="abridgedDirectors"
          value={movie.abridgedDirectors}
        >
          Directors
        </InputText>
        <TextArea
          onChange={this.onChange}
          prop="criticsConsensus"
          value={movie.criticsConsensus}
        >
          Critics Consensus
        </TextArea>
        <TextArea
          onChange={this.onChange}
          prop="synopsis"
          value={movie.synopsis}
        >
          Synopsis
        </TextArea>
        <InputText onChange={this.onChange} prop="year" value={movie.year}>
          Year
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="mpaaRating"
          value={movie.mpaaRating}
        >
          MPAA Rating
        </InputText>
        <InputText
          onChange={this.onChangeRatings}
          prop="criticsScore"
          value={ratings.criticsScore}
        >
          Critics Score
        </InputText>
        <InputText
          onChange={this.onChangeRatings}
          prop="audienceScore"
          value={ratings.audienceScore}
        >
          Audience Score
        </InputText>

        <div className="btn-group">
          <button onClick={this.save} className="btn btn-primary">
            Save
          </button>
          <Link className="btn btn-danger" to="/movies">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default MovieEdit;
