import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
let marked=require('marked');
const placeholder = 
`# Welcome to my React Markdown Previewer!
 
## This is a sub-heading... 
### And here's some other cool stuff:
 
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class App extends Component {
  state={
    markdown:placeholder
  }
  UpdateMarkDown=function(markdown){
    this.setState({markdown})
  }
  render() {
    let {markdown}=this.state
    return (
       <div className="App container">
          <h2 className="liveMarkdown"> live markdown</h2>
       <div className="row">
       <div className="col-md-6 col-sm-12 col-xs-12" id="editor__">
      
        <ControlLabel >
        <header className="preview__header">Input </header>
        </ControlLabel>
        <FormControl id="editor" componentClass="textarea" placeholder="Enter the text" value={markdown} onChange={(event)=>this.UpdateMarkDown(event.target.value)}>
               
        </FormControl>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 preview" >
           <header className="preview__header"> Preview </header>
          <div dangerouslySetInnerHTML={{__html:marked(markdown)}} id="preview">
          
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
