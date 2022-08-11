import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Last from './Last';

export default class Sub extends Component {
  render() {
    return (
      <div>
                {this.props.isEnabled ? <Button onClick={() => this.props.disableButton()} variant='secondary'>DISABLE</Button> : <Button onClick={() => this.props.enableButton()} variant='primary'>ENABLE</Button>}
                <Last isEnabled={this.props.isEnabled} />
      </div>
    )
  }
}
