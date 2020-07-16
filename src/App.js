import React from 'react';
import Counter from './components/Counter';

class App extends React.Component{

  state = {count: 1};

  /*incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
    console.log("pouet", this.state);
  };
  decrementCount = () => {
    this.state.count === 1 ? this.setState({
      count: 1
    }) :
    this.setState({
      count: this.state.count - 1
    });
    console.log("tweip", this.state);
  };*/

  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  };   

  incrementCount() {

    this.setState({
      count: this.state.count + 1
    });
    console.log("pouet", this.state);
  };

  decrementCount() {
    this.state.count === 1 ? this.setState({
      count: 1
    }) :
    this.setState({
      count: this.state.count - 1
    });
    console.log("tweip", this.state);
  };

  render(){
    return(
      <div>
          <h1>Counter</h1>
          <Counter
            incrementFn = {() => this.incrementCount()}
            decrementFn = {() => this.decrementCount()}>
            {this.state.count}
          </Counter>
          
          {/* <h2>{this.state.count}</h2>
          <button onClick={() => this.incrementCount()}>+</button>
          <button onClick={() => this.decrementCount()}>-</button> */}
      </div>
    );
  }
}

export default App;
