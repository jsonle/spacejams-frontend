import React, { Component } from 'react';

class AudioPlayer extends Component {
    state = {  }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.track !== prevProps.track) {
            if (this.props.track.preview_url) {
                this.player.src = this.props.track.preview_url;
                this.player.play();
            }
        }
    }

    render() { 
        console.log(this.props.track)
        return (
            <div className="audio-player">
                <h3>Audio Player</h3>
                <audio controls ref={ref => this.player = ref}/>
            </div>
        );
    }
}
 
export default AudioPlayer;