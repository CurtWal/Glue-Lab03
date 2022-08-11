import React, { Component } from 'react'
import Sub from './Sub';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEnabled:true,
        }
      }
      disableButton = () =>{
        this.setState({
            isEnabled: false,
        })
      }
      enableButton = () => {
        this.setState({
            isEnabled:true,
        })
      }
        render() {
        return (
          <div>
            <Sub isEnabled={this.state.isEnabled} disableButton={this.disableButton} enableButton={this.enableButton}/>
          </div>
        )
      }
}

