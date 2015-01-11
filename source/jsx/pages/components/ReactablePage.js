/** @jsx React.DOM */

//XXX Reactable is not support react v0.12
var ReactablePage = React.createClass({
    getInitialState: function () {
        return {data : [
        { Name: 'Lee Salminen', Age: '23', Position: 'Programmer'},
        { Name: 'Griffin Smith', Age: '18', Position: 'Engineer'},
        { Name: 'Ian Zhang', Age: '28', Position: 'Developer'}
        ]};
    },
    render: function() {
        return(
            <Reactable.Table
            className='table-bordered col-md-8'
            data={this.state.data}
            itemsPerPage={4}
            sortable={['Age','Position']}
            filterable={['Name', 'Age', 'Position']} />
        );
    }
});
