var React = require('react');
var ReactDOM = require('react-dom');
var Tables=require('./Tables');

var FormComponents = React.createClass({

  getInitialState: function() {
    return({message:[]});
  },

  changeSave:function(){
          var file={};
          file.wave=this.props.wave;
          file.name=this.props.name;
          file.email=this.props.email;
          file.empcode=this.props.empcode;
          file.empdept=this.props.empdept;
          file.empdesg=this.props.desg;
          file.skills=this.props.skills;
          //file.id = this.props.id;
          console.log("My wave"+file.wave);
          $.ajax({
            url:'http://localhost:8080/saveMessage',
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST',
              data: JSON.stringify(file),
            success: function(data){
              console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.error(err.toString());
            }.bind(this)
        });
    },
   render: function(){
     if(this.state.message.length>0)
     {
       var MyTable=<Tables name={this.state.message}/>
     }
       return(
           <div>
           <form method="post" action="http://localhost:8080/saveMessage">

               Select list:
               <select className="form-control">
                   <option>WaveStream 1</option>
                   <option>WaveStream 2</option>
                   <option>WaveStream 3</option>
                   <option>WaveStream 4</option>
               </select><br/>

                   Name1:     <input type="text" name="name1" className="form-control"/>
                   Email:     <input type="text" name="email" className="form-control"/>
                   Phone:     <input type="text" name="phone" className="form-control"/>
                   Git URL:   <input type="text" name="giturl" className="form-control"/>
                   EmpCode:   <input type="text" name="empcode" className="form-control"/>
                   Empdept:   <input type="text" name="empdept" className="form-control"/>
                   EmpDesg:   <input type="text" name="empdesg" className="form-control"/>
                   Skills:    <textarea className="form-control" rows="4" id="comment"></textarea><br/>
                   Exp:       <input type="text" name="exp" className="form-control"/>
                              <input type="submit"  className="btn btn-danger" value="Submit"/>

                    </form>

           <div className="container">
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>WaveNo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Git Url</th>
                        <th>Emp Code</th>
                        <th>Emp Dept</th>
                        <th>Emp Desg</th>
                        <th>Emp Skills</th>
                        <th>Experience</th>
                    </tr>
                </thead>

                    <Tables/>
              </table>
              </div>
              </div>

       );
   },

   componentDidMount:function(){
      $.ajax({
        url:'http://localhost:8080/saveGet',
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success:function(response){
          console.log("successes");
          this.setState({message:response});
          console.log(this.state.message);
        }.bind(this),
        error: function(xhr, status, err){
            console.error(err.toString());
        }.bind(this)
      });
    },
});
module.exports = FormComponents
