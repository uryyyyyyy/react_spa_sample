/** @jsx React.DOM */

//dupricated
var LogoutForm = React.createClass({
    logout : function(){
        var promise = util.getAjaxAsync('webAPI/logout');
        promise.then(util.showServerMessage, util.showServerError)
        .then(this.props.logout);
    },
    render: function() {
        return (
            <div className='navbar-form navbar-right'>
            <a className='navbar-form' href='#'
            children={'login as ' + this.props.userName} />
            <ReactBootstrap.Button bsStyle='info' children='Sign out'
            onClick={this.logout}/>
            </div>
        );
    }
});
