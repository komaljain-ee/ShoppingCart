import React,{Component} from 'react';

class HelloWorld extends Component {

    constructor(props){
        super(props);
        this.state = {
          count: this.props.initialCount || 0
        };
        console.log("component created");
    }

    componentDidMount(){
      console.log("component mounted");
    }

    componentWillReceiveProps(newProps){
      console.log("component going to receive props");
      this.setState({count: newProps.initialCount});
    }

    componentDidReceiveProps(newProps){
      console.log("component received props");
    }

    componentWillUpdate(newProps, newState){
      console.log("component will update");
    }

    componentDidUpdate(newProps, newState){
      console.log("component did update");
    }

    shouldComponentUpdate(newProps, newState){
      console.log("should update");
      return newProps.initialCount >= 0;
    }

    increment(){
      this.setState({count: this.state.count + 1});
    }

    render(){
        return (
          <div>
            <input type="button" value="Increment" onClick={()=>{this.increment()}}/>
            <div className="hello-world">{this.state.count}</div>
          </div>
      );
    }
}

module.exports = HelloWorld;
