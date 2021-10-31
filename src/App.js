import axios from 'axios';
import './App.css'
import React, {Component} from 'react';
class App extends Component{
 state={
   advice:""
 };
 
  componentDidMount(){
    this.fetchAdvice();  
  }

  fetchAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((res)=>{
      const ad= res.data.slip.advice;
      this.setState({advice:ad});
    })
    .catch((error)=>{
       console.log(error);
    })
  }
 
  render(){
    return(
    <div className="app">
      <div className="card">
        <h1 className="heading">{this.state.advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>Get Advice</button>
      </div>
    </div>
     
    );
  }
}
export default App;