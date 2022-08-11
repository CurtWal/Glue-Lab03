import React, { Component } from 'react'

export default class Last extends Component {
  render() {
    return (
      <div>
        <h2>
        {this.props.isEnabled ? ('This is disabled') : ('This is enabled')}</h2>
      </div>
    )
  }
}
