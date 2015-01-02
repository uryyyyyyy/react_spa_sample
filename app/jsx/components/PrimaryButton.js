/** @jsx React.DOM */

var PrimaryButton = React.createClass({
    render: function() {
        return <button
            onClick={ this.props.onClick }
            className="btn btn-primary">{this.props.text}</button>;
    }
});
