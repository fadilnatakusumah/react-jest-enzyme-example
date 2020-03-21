import React, { Component } from 'react'
import PT from 'prop-types'

export class PostItem extends Component {
  static propTypes = {
    title: PT.string,
    desc: PT.string,
  }

  render() {
    const { title, desc } = this.props;

    if (!title || !desc) return null;

    return (
      <div data-test="post-item-component">
        <h4 data-test="post-item-title">{title}</h4>
        <p data-test="post-item-description">{desc} </p>
      </div>
    )
  }
}

export default PostItem
