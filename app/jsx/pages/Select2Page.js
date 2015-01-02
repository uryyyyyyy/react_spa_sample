/** @jsx React.DOM */

var Select2Page = React.createClass({
    getInitialState: function () {
        return { field: {id:"dada", text:"initialState"}};
    },
    changeText: function (fi) {
        this.setState( {field: fi });
    },
    render: function() {
        return <div className="commentBox">
        <Select2Sample field={this.state.field} onChange={this.changeText} />
        <PTag text={this.state.field} />
        <Select2Sample field={this.state.field} onChange={this.changeText} />
        </div>;
    }
});
