import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloWorld.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialCount:  0
    };
  }

  updateInitialCount(value){
    let number = parseInt(value) || 0;
    this.setState({initialCount: number});
  }

  render(){
    return (
      <div>
        <input type="number" onChange={(e)=> {
            this.updateInitialCount(e.target.value);
          } }/>
        <HelloWorld initialCount={this.state.initialCount}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,
    document.getElementById("app"));
