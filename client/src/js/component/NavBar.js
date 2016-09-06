var React=require('react');
var {Link}=require('react-router');

var NavBar=React.createClass({

  render: function(){
    return(
      <div className="container-fluid">
      <ul className="nav navbar-nav">
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/manageparticipants">ManageParticipants</Link></li>
       <li><Link to="/views">Views</Link></li>
      </ul>
      </div>

    );
  }
});
module.exports=NavBar;
