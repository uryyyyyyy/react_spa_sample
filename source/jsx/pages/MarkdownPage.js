/** @jsx React.DOM */
var MarkdownPage = React.createClass({
    getInitialState: function () {
        return { text: "*initialState*"  };
    },
    changeText: function (text) {
        this.setState( {text: text });
    },
    render: function() {
        var rawMarkUp = marked(this.state.text.toString())
        return (
            <div>
            <TextArea text={this.state.text} onChange={this.changeText} />
            <RowHtml text={rawMarkUp} />
            </div>
        );
    }
});
