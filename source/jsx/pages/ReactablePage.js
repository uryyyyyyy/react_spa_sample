/** @jsx React.DOM */

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
            <ReactableSample data={this.state.data} />
        );
    }
});
