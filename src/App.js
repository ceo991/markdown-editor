import React, { Component } from 'react';
import Split from 'react-split';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      content: "# h1\n\n## h2\n\n[Google](https://google.com)\n\n```\n\n function(){//this is a function}\n\n ``` \n\n`Array.prototype.map()` \n\n- list item\n\n> a block quote\n\n![The San Juan Mountains are beautiful!](https://live.staticflickr.com/389/31833779864_7ec0b63ffc_h.jpg 'San Juan Mountains') \n\n **a bolded text**"
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(content){
    this.setState({content:content})
  }
  
  render(){
    return <div>
              <Split
                sizes={[60, 40]} 
                direction="horizontal" 
                className="split"
               >
                  <Editor content={this.state.content} changeState={this.handleOnChange}/>
                  <Preview content={this.state.content}/>
              </Split>
           </div>
  }
}

export default App;
