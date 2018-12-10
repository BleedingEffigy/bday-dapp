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
    this.setState({address: drizzleState.accounts[0]});
  }

  render() {
    return <div className="hero-body">Withdraw Component: {this.state.address}</div>;
  }
}

export default Withdraw;
