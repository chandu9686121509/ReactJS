var React=require('react');
var ReactDOM=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var NavBar=require('./component/NavBar');
var FormComponents=require('./component/FormComponents');
var Home=require('./component/Home');
var ManageParticipants=require('./component/ManageParticipants');
var Views=require('./component/Views');

var MainComponent = React.createClass({
    render: function(){
        console.log("This is my parent");
        return(
            <div>
                <NavBar/>
                <br/><br/><br/><br/>
                {this.props.children};
            </div>
        );
    }
});
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={MainComponent}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/manageparticipants" component={ManageParticipants}/>
        <Route path="/views" component={Views}/>
      </Route>
</Router>,document.getElementById('app'));
