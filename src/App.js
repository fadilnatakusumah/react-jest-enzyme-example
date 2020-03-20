import React from 'react';
import './App.scss';
import Header from './components/header';
import Headline from './components/headline';

const dummyData = [{
  fName: "Fadil",
  lName: "Muhammad",
  email: "fadil.ntksmh@gmail.com",
  age: 25,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header/>
      <Headline
      dummyData={dummyData}
        title="Post title"
        desc="This is post title"
      />
    </div>
  );
}

export default App;
