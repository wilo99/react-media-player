/** @jsx React.DOM */

var MediaList = React.createClass({
    displayName: 'MediaList',
    
    getFileMedia: function(folderUrl){
        
        
        return ("");
    },
    
    render: function(){
        
        return(
            <div className="media-list">
                <h3>Media list</h3>
            </div>
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
            <div className="media-player">
                <h2>Media Player</h2>
                
                <video width="600" height="360" id="player1" type="video/mp4" controls="controls"
                    src="file:///C://Users/William/Downloads/Game of Thrones Theme(Rock Cover).mp3" 
                    poster="assets/img/cover-art.jpg" autoplay loop>
                    
                    <button id="pp">Toggle</button>
                    <span id="time">Time: </span>
                </video>
            </div>
        )
    }
});

React.render(
    React.createElement(MediaPlayer, null),
    document.getElementById('player-wrapper')
);