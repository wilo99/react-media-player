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
            React.createElement("li", {className: "media-item"}, 
                React.createElement("a", {href: "#", onClick:  this.setActiveIndex, className:  this.state.activeIndex, "data-media-index":  this.props.mediaIndex, "data-media-url":  this.props.media}, " ",  this.props.media, " ")
            )
        );
    }

});

var MediaList = React.createClass({displayName: 'MediaList',
    
    getFileMedia: function(){
        
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
            React.createElement("div", {className: "media-list"}, 
                React.createElement("h3", null, "Media list"), 
                React.createElement("p", null, "Click to play any file"), 
                
                React.createElement("ul", {className: "media-list"}, 
                    
                     mediaList.map(function(media, index){
                        
                        return React.createElement(MediaItem, {media:  media, mediaIndex:  index })
                        
                    }) 
                    
                )
            )
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
            React.createElement("div", {className: "media-player"}, 
                React.createElement("h2", null, "Media Player"), 
                
                React.createElement("video", {width: "600", height: "360", id: "player1", type: "video/mp4", controls: "controls", 
                    src: "file:///E:/Experiments/MediaPlayer/media/16 In My City.mp3", 
                    poster: "assets/img/cover-art.jpg", autoplay: true}, 
                    
                    React.createElement("button", {id: "pp"}, "Toggle"), 
                    React.createElement("span", {id: "time"}, "Time: ")
                ), 
                
                React.createElement(MediaList, {activeIndex: "2"})
            )
        )
    }
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);