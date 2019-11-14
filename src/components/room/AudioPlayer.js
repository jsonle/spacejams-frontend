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
                {this.props.track ? <h4>{this.props.track.name}</h4> : <h4>Select a track to start listening</h4>}
                <audio controls ref={ref => this.player = ref} onEnded={this.handleTrackEnded}/>
            </div>
        );
    }
}
 
export default AudioPlayer;