var React = require('react');
var ReactDOM = require('react-dom');
var FormComponents = require('./FormComponents');
var Tables = require('./Tables');
var ManageParticipants = React.createClass({
    render: function(){
        return(
            <div>
            <div className="row">
                <FormComponents />
            </div>
            <div className="row">
                <Tables/>
            </div>
            </div>
        );
    }
})
module.exports= ManageParticipants
