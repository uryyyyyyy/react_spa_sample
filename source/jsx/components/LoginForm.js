/** @jsx React.DOM */

//dupricated
var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            userId: '',
            pass: ''
        };
    },
    changeUserId: function (text) {
        this.setState( {userId: text });
    },
    changePass: function (text) {
        this.setState( {pass: text });
    },
    login : function(){
        var loginData = {
            userId: this.state.userId,
            pass: this.state.pass
        };
        var promise = util.postAjaxAsync('webAPI/login', loginData);
        promise.then(this.props.login, util.showServerError);
    },
    render: function() {
        return (
            <div className='navbar-form navbar-right'>
            <TextForm text={this.state.userId} type='text'
            placeholder='User ID' onChange={this.changeUserId}/>
            <TextForm text={this.state.pass} type='password'
            placeholder='Password' onChange={this.changePass}/>
            <ReactBootstrap.Button bsStyle='primary'
            children='Sign in' onClick={this.login}/>
            </div>
        );
    }
});
