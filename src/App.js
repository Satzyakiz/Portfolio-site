import React from 'react';
import './App.css';

// import MyTyped from "./assets/js/mytyped";
import MyLoader from "./assets/js/MyLoader";
import HomePage from "./assets/js/HomePage";


class App extends React.Component {

  state={ loadingTimeOver: false}

  callLoader() {
  return <MyLoader />;
  }
  loadingOver(){
    return <HomePage />;
  }
  componentDidMount(){
    setTimeout(() =>{
      this.setState( {loadingTimeOver: true})
    },1000);
  }
  render(){
    return this.state.loadingTimeOver === false ? this.callLoader() : this.loadingOver();
  }
}

export default App;
