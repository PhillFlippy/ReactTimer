var React = require('react');
var ReactDOM = require('react-dom');



var Clock = React.createClass({
getDefaultProps: function(){
  totalSecs: 0
},
propTypes: function(){
  totalSecs:React.PropTypes.number
},
  formatSeconds: function(totalSecs){
    var seconds = totalSecs % 60;
    var minutes = Math.floor(totalSecs / 60);
    if (seconds < 10)
    {
      seconds = "0" + seconds;
    }
    if (minutes < 10){
      minutes = "0"+ minutes;
    }
    return minutes + " : " + seconds;

  },
render:function(){
  var {totalSecs} = this.props;
   return(

  <div className="clock">

    <span className="clock-text">
      {this.formatSeconds(totalSecs)}
    </span>
    </div>
  );
}
});
module.exports = Clock;
