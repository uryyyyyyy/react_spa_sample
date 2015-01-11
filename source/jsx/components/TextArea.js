/** @jsx React.DOM */

var TextArea = React.createClass({
    onChange: function(e){
        this.props.onChange(e.target.value);
    },
    render: function() {
        return <textarea
            value={this.props.text}
            onChange={this.onChange}>
            </textarea>;
    }
});
