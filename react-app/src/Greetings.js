import React from "react";

class Greetings extends React.Component {

    render(){
        return (
            <h3>
            Hello {this.props.firstName}
            </h3>
            );
    }
}

export default Greetings;