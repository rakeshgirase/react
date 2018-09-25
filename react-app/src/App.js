import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import MoviesList from "./MovieList";
import MovieEdit from "./MovieEdit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      id: null
    };
  }

  toEditMode = e => {
    console.log("toEditMode", e.id);
    this.setState({
      editMode: true,
      id: e.id
    });
  };

  toListMode = () => {
    console.log("toListMode");
    this.setState({
      editMode: false,
      id: null
    });
  };

  render() {
    return (
      <div className="container">
        <h1>ReactJS</h1>

        {this.state.editMode ? (
          <MovieEdit toListMode={this.toListMode} movieId={this.state.id} />
        ) : (
          <MoviesList toEditMode={this.toEditMode} />
        )}
      </div>
    );
  }
}

export default App;
