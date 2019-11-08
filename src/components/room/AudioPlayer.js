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
                {this.props.track && <h3>{this.props.track.name}</h3>}
                <audio controls ref={ref => this.player = ref}/>
            </div>
        );
    }
}
 
export default AudioPlayer;