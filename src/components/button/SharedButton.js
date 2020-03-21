import React, { Component } from 'react'
import PT from 'prop-types'

export class SharedButton extends Component {
  static propTypes = {
    buttonText: PT.string,
    emitEvent: PT.func
  }

  submitEvent = () => {
    const { emitEvent } = this.props;
    if(emitEvent){
      emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;
    return (
      <button data-test="shared-button" onClick={this.submitEvent}>
        {buttonText}
      </button>
    )
  }
}

export default SharedButton
