import React, { Component } from 'react';
import DisplayModeButton from './DisplayModeButton';

class Editor extends Component{
    constructor(props){
      super(props)
    }
    
    render(){
      
      return <div className="comp1">
              <h1>Markdown Editor</h1>
              <DisplayModeButton changeDisplayMode={this.props.changeDisplayMode} mode={"edit"}/>
              <textarea id="editor" rows="50" cols="90" onChange={(e)=>this.props.changeState(e.target.value)}>{this.props.content}</textarea>
            </div>
    }
  }

export default Editor;