import React from "react";

class Withdraw extends React.Component {
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);
  }

  render() {
    return <div>Withdraw Component</div>;
  }
}

export default Withdraw;