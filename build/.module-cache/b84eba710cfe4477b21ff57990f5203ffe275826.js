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
    
    render: function(){
        
        return
    }
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);