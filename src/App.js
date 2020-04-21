import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player'

//State
//setState
//Arrays or Lists
//Inline event Listeners
//Methods within components 
//Conditional rendering




class App extends Component  { //This is this

  state = { //this.state.blah 
    alive: true,
    name: "Bugs Bunny",
    age: 129,
    location: 'Brooklyn',
    badGuys : [
      'Elmer Fudd',
      'Yosemite Sam',
      'Sylvester PuttyCat',
      'Wiley Cayote',
    ]
  }




  clickMethod = () => { 
   
    this.setState({
      alive:!this.state.alive
    })

  }

  showName = () => {
    if(this.state.alive){
      return <h1>{this.state.name}</h1>
    } else {
      return <h1 className="dead"><strike>{this.state.name}</strike></h1>
    }
  }
  
  thwartBadGuy = (i) => {
    let badGuys = [ ...this.state.badGuys ]//Array of bad guys
    badGuys.splice(i, 1)
    this.setState({
      badGuys
    })
  }


  showListOrBadGuys = () => {
    let badGuys = this.state.badGuys.map((eachBadGuy,i) => {
      return <li key={i}>{eachBadGuy}......... <button onClick={() => this.thwartBadGuy(i)}>Thwarted</button> </li>
      // return <li key={i}>{eachBadGuy}......... <button onClick={function(){ this.thwartBadGuy(i) }}>Thwarted</button> </li>
    })
    return badGuys
  }


  render(){
    
    return (
        <div className="App">
            
          <i>Name: {this.showName()} </i>
          
          <button onClick={this.clickMethod} >Shoot!</button>


          <ul>{this.showListOrBadGuys()}</ul>

        </div>
      );
    }
}

export default App;



