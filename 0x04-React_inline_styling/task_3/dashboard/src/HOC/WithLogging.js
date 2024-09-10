import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
  const displayName = WrappedComponent.displayName || "Component";

  class EnhancedComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  EnhancedComponent.displayName = `WithLogging(${displayName})`;
  return EnhancedComponent;
}
