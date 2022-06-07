import React, { Component } from 'react';
import { marked } from 'marked';
class Preview extends Component{
    constructor(props){
      super(props)
    }
    
    render(){
      return <div  className="comp2" >
                <h1>Preview</h1>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.content)}}/>
             </div>
    }
    
  }

export default Preview;