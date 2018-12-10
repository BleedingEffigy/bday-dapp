import React from "react";

class Withdraw extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: null
    }
  }
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);
    this.setState({address: drizzleState.accounts[0]});
  }

  render() {
    return <div>Withdraw Component: {this.state.address}</div>;
  }
}

export default Withdraw;