/** @jsx React.DOM */
var CKEditorPage = React.createClass({
    getInitialState: function () {
        return { text: '*initialState*'  };
    },
    changeText: function (text) {
        this.setState( {text: text });
    },
    render: function() {
        return (
            <div>
            <CKEditor text={this.state.text} onChange={this.changeText} />
            <p children={this.state.text} />
            </div>
        );
    }
});
