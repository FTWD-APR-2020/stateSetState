import React, { Component } from 'react';
import Form from './Form'
class Home extends Component {

    state = {
        username: '',
        password: '',
        plant: '',
        music: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    setPlant = (plant) => {
        this.setState({
            plant:plant
        })
    }

    setMusic = (music) => {
        this.setState({
            music
        })
    }

    signUp = (e) => {
        e.preventDefault() //Stops the page from changing pages.. Default old skool is too change pages on form submit
        //In the near future this is going to post the state to a database/api 
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h3>Welcome {this.state.username} to My Better App: {this.state.music}</h3>
               
                <hr></hr>

                <Form 
                    animal="octocat"
                    handleChangeFromForm={this.handleChange}
                    signUpFromForm={this.signUp}
                    setPlantFromForm={this.setPlant}
                    setMusicFromTheForm={this.setMusic}
                />
                
                <hr></hr>

              {/* <button onClick={this.sayHello}>Push</button> */}
            </div>
        );
    }
}

export default Home;







    // setUsername = (e) => { //Everytime you type this is going to go into state
    //     this.setState({
    //         username: e.target.value
    //     })
    // }


    // setPassword= (e) => { //Everytime you type this is going to go into state
    //     this.setState({
    //         password: e.target.value
    //     })
    // }
