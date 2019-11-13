import React, { Component } from 'react';


class AudioPlayer extends Component {
    state = {  }

    componentDidUpdate(prevProps) {
        if (this.props.track !== prevProps.track) {
            this.player.src = this.props.track.preview_url;
            this.player.play();
        }
    }

    handleTrackEnded = () => {
        this.props.playNextTrack();
    }

    render() { 
        console.log(this.props.track)
        return (
            <div className="audio-player">
                {this.props.track ? <h3>{this.props.track.name}</h3> : <h3>Select a track to start listening</h3>}
                <audio controls ref={ref => this.player = ref} onEnded={this.handleTrackEnded}/>
            </div>
        );
    }
}
 
export default AudioPlayer;