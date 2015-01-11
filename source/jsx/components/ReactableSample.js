/** @jsx React.DOM */

var ReactableSample = React.createClass({
    render: function() {
    return(
        <Reactable.Table
        className="table-bordered col-md-8"
        data={this.props.data}
        itemsPerPage={4}
        sortable={['Age','Position']}
        filterable={['Age', 'Position']} />
    );
}
});
