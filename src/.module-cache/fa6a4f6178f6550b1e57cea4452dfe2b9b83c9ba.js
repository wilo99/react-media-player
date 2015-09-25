/** @jsx React.DOM */

var MediaList = React.createClass({
    displayName: 'MediaList',
    
    getFileMedia: function(){
        
        // http://codepen.io/SpencerCooley/pen/JtiFL/
        // DRAG n DROP: get absolute file urls
        
        var folderUrl = 'file:///E:/Entertainment/Music/Ellie Goulding/Halcyon Days (Deluxe Edition)/';
        var playlist = ["01 Don't Say a Word.mp3", "16 In My City.mp3", "21 You My Everything.mp3"];
        
        return ();
    },
    
    render: function(){
        
        return(
            <div className="media-list">
                <h3>Media list</h3>
                <p>Select any mp3 file to list all files</p>
                <input type="file" name="media"/>
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
        // States: Autoplay, Loop, Paused, Stop, Playlist, HasNextSong, Shuffle
        
        return(
            <div className="media-player">
                <h2>Media Player</h2>
                
                <video width="600" height="360" id="player1" type="video/mp4" controls="controls"
                    src="file:///C://Users/William/Downloads/Game of Thrones Theme(Rock Cover).mp3" 
                    poster="assets/img/cover-art.jpg" autoplay>
                    
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