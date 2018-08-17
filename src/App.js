import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
let marked=require('marked');
class App extends Component {
  state={
    markdown:""
  }
  UpdateMarkDown=function(markdown){
    this.setState({markdown})
  }
  render() {
    let {markdown}=this.state
    return (
      <div className="App container">
        <FormGroup controlId="FormControlsTextArea"></FormGroup>
        <ControlLabel >Input</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Enter the markdown" value={markdown} onChange={(event)=>this.UpdateMarkDown(event.target.value)}></FormControl>
        <div>
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html:marked(markdown)}}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
