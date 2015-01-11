/** @jsx React.DOM */

var TextForm = React.createClass({
    onChange: function(e){
        this.props.onChange(e.target.value);
    },
    render: function() {
        return <input
            type={this.props.type}
            value={this.props.text}
            placeholder={this.props.placeholder}
            className='form-control'
            onChange={this.onChange}>
            </input>;
    }
});
