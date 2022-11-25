import React from "react";

class WelcomeCC extends React.Component {
  render() {
    return (
      <>
        <h2>You are now {this.props.age} Old!</h2>
      </>
    );
  }
}

export default WelcomeCC;
