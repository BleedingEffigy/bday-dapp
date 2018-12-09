import React from "react";

class Withdraw extends React.Component {
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);
  }

  render() {
    return <div>Withdraw Component: {this.drizzleState.accounts[0]}</div>;
  }
}

export default Withdraw;