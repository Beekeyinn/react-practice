import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error) {
      return (
        <div>
          <h2>oops Error Occurred!!!</h2>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
