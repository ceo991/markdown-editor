import React, { Component } from 'react';
import { marked } from 'marked';
import DisplayModeButton from './DisplayModeButton';
class Preview extends Component{
    constructor(props){
      super(props)
    }
    
    render(){
      
      return <div className="preview" >
                <h1>Preview</h1>
                <DisplayModeButton  changeDisplayMode={this.props.changeDisplayMode} mode={"preview"}/>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.content)}}/>
             </div>
    }
    
  }

export default Preview;