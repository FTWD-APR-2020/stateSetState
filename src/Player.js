import React, { Component } from 'react';
import ReactPlayer from 'react-player'
class Player extends Component {
    render() {
        return (
            <div>
                <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

                // our YouTube video
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
                    playing
                />
            </div>
        );
    }
}

export default Player;