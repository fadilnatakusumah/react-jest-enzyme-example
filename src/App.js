import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from './actions/postActions'

import './App.scss';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import PostItem from './components/listItems';

const dummyData = [{
  fName: "Fadil",
  lName: "Muhammad",
  email: "fadil.ntksmh@gmail.com",
  age: 25,
  onlineStatus: true
}]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideBtn: false,
    }
  }

  exampleMethod_updateState = () => {
    this.setState({ hideBtn: !this.state.hideBtn })
  }

  getPostsHandler = () => {
    const { getPosts } = this.props;
    getPosts();
    this.exampleMethod_updateState();
  }

  render() {
    const { posts } = this.props;
    const { state, getPostsHandler } = this;

    return (
      <div className="App" data-test="app-component" >
        <Header />
        <Headline
          dummyData={dummyData}
          title="Post title"
          desc="This is post title"
        />
        <div className="wrapper">
          {!state.hideBtn && <SharedButton data-test="shared-button" buttonText="Get Posts" emitEvent={getPostsHandler} />}
          {
            posts.map(post => (<PostItem key={post.title} title={post.title} desc={post.body} />))
          }
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatchEvent => ({
  getPosts: (payload) => dispatchEvent(getPosts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
