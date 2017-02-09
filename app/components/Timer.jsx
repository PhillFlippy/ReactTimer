var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
getInitialState: function(){
  return {count: 0,
  countdownStatus: 'paused'
};
},
componentDidUpdate: function(prevProps, prevState){
  if (this.state.countdownStatus !== prevState.countdownStatus){
    switch (this.state.countdownStatus){
          case 'started':
            this.startTimer();
            break;
            case 'stopped':
            this.setState({count: 0, countdownStatus: 'paused'});
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
    if (newCount === 0){
      this.setState({countdownStatus: 'paused'});
    }
  }, 1000);
},
componentWillUnmount: function(){
  clearInterval(this.timer);
  this.timer = undefined;
},

handleSetCountdown: function(seconds){
  this.setState({
    count: seconds,
    countdownStatus: 'started'
  });
},
handleStatusChange: function(newStatus) {
  this.setState({
    countdownStatus: newStatus
  });
},
  render:function(){
    var {count, countdownStatus} = this.state;
  
    return(
      <div>
        <h1 className="heading">Timer</h1>
      <Clock totalSecs={count} />
      <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
    </div>
  );
}
});
module.exports = Timer;
