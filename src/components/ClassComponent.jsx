// you can think of a class like a FACTORY
// or also as a blueprint

import { Component } from "react";
// this is the MAIN component class in the react library
// we'll need to extends from it EVERY component we write

// the chair or the building that comes out of the factory/bluprint
// is called INSTANCE

// every instance of the class we're going to use for creating react components
// is going to be atomic, independent, self-encapsuled

class ClassComponent extends Component {
  // render() method must be ALWAYS present in a class component
  // render() is MANDATORY

  state = {
    counter: 0,
    // 0 is the INITIAL VALUE of counter
    // every time the application loads, counter will be reset to 0
  };
  // the state object is encapsulated into the class component
  // can not be accessed from outside
  // the state object is READ-ONLY, we cannot directly modify it
  // this.state.counter = 5 <- this cannot be done

  render() {
    console.log(this);
    // "this" in a class component points the current INSTANCE of the class
    return (
      <>
        <h1>{this.props.title}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <p>The value of counter is: {this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </>
    );
  }
}

export default ClassComponent;

// props in a class component are going to be found on this.props (an object)
