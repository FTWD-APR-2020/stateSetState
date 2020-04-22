import React, { Component } from 'react';



class Form extends Component {

    state = {
        plant: 'cherry tree',
        music: 'no doubt'
    }

    sendMusicUp = () => {
         {/* Home.js >> setMusic(  //no doubt ) */}
        this.props.setMusicFromTheForm(this.state.music)
    }

    render() {
        return (
            <>                     
                {/* Home.js >> setPlant(  //cherry tree ) */}
                <button onClick={this.sendMusicUp}>Pass Music Up</button>
                <h2>{this.props.animal}</h2>
                <form onSubmit={this.props.signUpFromForm}>

                    <input onChange={this.props.handleChangeFromForm} name="username" type='text' required placeholder="enter username"/>
                    <input onChange={this.props.handleChangeFromForm} name="password" type='password' required placeholder="enter password"/>

                    <input type="submit" />

                </form>
            </>
        );
    }
}

export default Form;