/** @jsx React.DOM */

var RowHtml = React.createClass({
    render: function() {
        return <span dangerouslySetInnerHTML={{__html: this.props.text}} />;
    }
});
