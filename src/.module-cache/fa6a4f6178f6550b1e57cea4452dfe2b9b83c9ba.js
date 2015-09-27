/** @jsx React.DOM */

var MediaItem = React.createClass({displayName: 'MediaItem',
    
    getInitialState: function(){
        return { activeIndex: 0, activeMedia: '' };
    },
    
    loadMediaPlayer: function(){
        
        MediaElement('player1', {success: function(me) {
            me.play();
            
            me.addEventListener('timeupdate', function() {
                document.getElementById('time').innerHTML = me.currentTime;
            }, false);
            
            document.getElementById('pp')['onclick'] = function() {
                if(me.paused) {
                    me.play();
                }
                else {
                    me.pause();
                }
            };
        }})
    },

    // Update media state
    setActiveIndex: function(e){
        this.setState({ activeIndex: this.props.mediaIndex,
                        activeMedia: this.props.media });
        document.getElementById("player1").src = this.props.media;
        
        console.log('Now playing: ' + this.props.activeMedia);
        this.loadMediaPlayer();
        
        e.preventDefault();
    },
    
    render: function(){
        
        return (
            <li className="media-item">
                <a href="#" onClick={ this.setActiveIndex } className={ this.state.activeIndex } data-media-index={ this.props.mediaIndex } data-media-url={ this.props.media }> { this.props.media } </a>
            </li>
        );
    }

});

var MediaList = React.createClass({displayName: 'MediaList',

    activateDropZone: function(){
        
        

        $('#myFile').bind('change', function(){
            
            //this.files[0].size gets the size of your file.
            alert(this.files[0].size);

        });
    },
    
    getFileMedia: function(){
        
        this.activateDropZone();
        
        // http://codepen.io/SpencerCooley/pen/JtiFL/
        // DRAG n DROP: get absolute file urls, saves the list to local storage
        var folderURL = 'file:///E:/Experiments/MediaPlayer/media/';
        var playlist = ["01 Don't Say a Word.mp3", "16 In My City.mp3", "21 You My Everything.mp3"];
        var getFullURL = function(media){
            return folderURL + media;
        }
        
        return playlist.map(getFullURL, playlist);
    },
    
    render: function(){
        var mediaList = this.getFileMedia();
        
        return(
            <div className="media-list">
                <h3>Media list</h3>
                
                <div className="media-dropzone">
                    <p>Drop media here</p>
                </div>
                
                <input type="file" id="myFile" />
                
                <ul className="media-list">
                    
                    { mediaList.map(function(media, index){
                        
                        return <MediaItem media={ media } mediaIndex={ index } />
                        
                    }) }
                    
                </ul>
            </div>
        )
    }
});

var MediaPlayer = React.createClass({displayName: 'MediaPlayer',
    
    getInitialState: function(){
        return { play: false, loop: false, shuffle: false };
    },
    
    render: function(){
        // States: Autoplay, Loop, Paused, Stop, Playlist, HasNextSong, Shuffle
        
        return(
            <div className="media-player">
                <h2>Media Player</h2>
                
                <video height="360" id="player1" type="video/mp4" controls="controls"
                    src="file:///E:/Experiments/MediaPlayer/media/16 In My City.mp3" 
                    poster="assets/img/cover-art.jpg" autoplay>
                    
                    <button id="pp">Toggle</button>
                    <span id="time">Time: </span>
                </video>
                
                <MediaList activeIndex="2"/>
            </div>
        )
    }
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);