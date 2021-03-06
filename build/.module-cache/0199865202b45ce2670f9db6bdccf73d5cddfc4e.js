/** @jsx React.DOM */

var MediaList = React.createClass({
    displayName: 'MediaList',
    
    getFileMedia: function(folderUrl){
        
    },
    
    render: function(){
        
        return(
            React.createElement("div", {className: "media-list"}, 
                React.createElement("h3", null, "Media list")
            )
        )
    }
});

var MediaPlayer = React.createClass({
    displayName: 'MediaPlayer',
    
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
    
    render: function(){        
        
        return(
            React.createElement("div", {className: "media-player"}, 
                React.createElement("h2", null, "Media Player"), 
                
                React.createElement("video", {width: "600", height: "360", id: "player1", type: "video/mp4", controls: "controls", 
                    src: "file:///C://Users/William/Downloads/Game of Thrones Theme(Rock Cover).mp3", 
                    poster: "assets/img/cover-art.jpg", autoplay: true, loop: true}, 
                    
                    React.createElement("button", {id: "pp"}, "Toggle"), 
                    React.createElement("span", {id: "time"}, "Time: ")
                )
            )
        )
    }
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);