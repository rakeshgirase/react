const movies = function(state = [], action) {
    console.log(action.type, action);
  
    switch (action.type) {
      case "MOVIES-LOADED":
        return action.movies;
  
      default:
        return state;
    }
  };
  
  export default movies;
  