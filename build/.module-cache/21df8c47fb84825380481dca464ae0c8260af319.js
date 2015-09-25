var MediaList = React.createClass({displayName: "MediaList",
    
});

var MediaPlayer = React.createClass({displayName: "MediaPlayer",
    
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
    
    render: (
        
        React.createElement("div", {className: "media-player"}, 
            React.createElement("video", {width: "600", height: "360", id: "player1", src: "file:\\\\\\C:\\Users\\William\\Downloads\\Game of Thrones Theme(Rock Cover).mp3", type: "video/mp4", controls: "controls", loop: "true", autoplay: true}), 
            
            React.createElement("input", {type: "button", id: "pp", value: "toggle"}), 
            React.createElement("span", {id: "time"})
        )
   )
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);