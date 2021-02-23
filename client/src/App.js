import React from "react";
import Header from './components/Header/index'
import Logo from './components/Logo/index'
import Title from './components/LandingTitle/index'
import Button from './components/Button/index'

function App() {

  return (
    <div className="App" style={{backgroundColor: "red", minHeight: '100vh'}}>
      <Header />
      <div className="container is-widescreen" >
      <Logo style= {{ width: "20%"}}/>
      <Title style= {{fontSize : "60px"}} />
      <Button className="button is-black" style= {{fontSize : "60px", borderRadius : "250px"}} title = "1 Engage"/>
    </div>
    </div>
  );
}

export default App;
