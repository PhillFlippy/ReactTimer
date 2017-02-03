var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('Nav');



var Main = (props) => {
  return(<div>


    <div >
      <div>
      <Nav />
        <p> Main Component</p>
        {props.children}
      </div>
</div></div>
  );
};
module.exports = Main;
