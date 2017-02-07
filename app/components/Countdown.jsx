var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('Clock');



var Countdown = (props) => {
  return(<div>

      <Clock totalSecs={150} />
    </div>
  );
};
module.exports = Countdown;
