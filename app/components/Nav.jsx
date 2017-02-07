var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
        <div className="top-bar">
            <div className = "top-bar-left">
                <ul className="menu">
                  <li className="menu-text menu-centered">React Timer App</li>
                  <li> <IndexLink to="/" activeClassName="active " activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
                  <li><Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>Countdown</Link></li>
                </ul>
            </div>
            <div className = "top-bar-right">
              <ul className="menu">
                <li className="menu-text menu-centered"> Created by <a href="https://github.com/PhillFlippy"  target="_blank">Phillip Eade</a></li>

              </ul>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
