React.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('example')
);

var MediaPlayer = React.createClass({displayName: "MediaPlayer",
    
    render: function(){
        React.createElement("div", {className: "media-player"}
        
        )
    }
});

React.render(
    React.createElement(MediaPlayer, null)
);