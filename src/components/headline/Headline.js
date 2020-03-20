import React, { Component } from 'react'
import PT from 'prop-types'

export class Headline extends Component {
  static propTypes = {
    title: PT.string,
    desc: PT.string,
    dummyData: PT.arrayOf(PT.shape({
      fName: PT.string,
      lName: PT.string,
      email: PT.string,
      age: PT.number,
      onlineStatus: PT.bool,
    }))
  }

  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null
    }

    return (
      <div data-test="headline-component">
        <div className="wrapper">
          <h1 data-test="post-title">{title}</h1>
          <p data-test="post-desc">{desc}</p>
        </div>
      </div>
    )
  }
}

export default Headline
