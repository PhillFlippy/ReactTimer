var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
getInitialState: function(){
  return {count: 0,
  timerStatus: 'paused'
};
},
componentDidUpdate: function(prevProps, prevState){
  if (this.state.timerStatus !== prevState.timerStatus){
    switch (this.state.timerStatus){
          case 'started':
            this.startTimer();
            break;
            case 'stopped':
            this.setState({count: 0, timerStatus: 'paused'});
            case 'paused':
            clearInterval(this.timer);
            this.timer = undefined;
            break;
    }
  }
},

startTimer: function(){
  this.timer = setInterval(() => {
    var newCount = this.state.count + 1;
    this.setState({
      count : newCount >= 0 ? newCount : 0
    });
  }, 1000);
},
componentWillUnmount: function(){
  clearInterval(this.timer);
  this.timer = undefined;
},

handleSetCountdown: function(seconds){
  this.setState({
    count: seconds,
    timerStatus: 'started'
  });
},
handleStatusChange: function(newStatus) {
  this.setState({
    timerStatus: newStatus
  });
},
  render:function(){
    var {count, timerStatus} = this.state;

    return(
      <div>
        <h1 className="heading">Timer</h1>
      <Clock totalSecs={count} />
      <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
    </div>
  );
}
});
module.exports = Timer;
