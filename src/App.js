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

function App({ getPosts, posts }) {

  return (
    <div className="App" data-test="app-component">
      <Header />
      <Headline
        dummyData={dummyData}
        title="Post title"
        desc="This is post title"
      />
      <div className="wrapper">
        <SharedButton buttonText="Get Posts" emitEvent={getPosts} />
        {
          posts.map(post => (<PostItem key={post.title} title={post.title} desc={post.body} />))
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatchEvent => ({
  getPosts: (payload) => dispatchEvent(getPosts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
