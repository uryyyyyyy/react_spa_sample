/** @jsx React.DOM */

var CKEditor = React.createClass({
    changeFunc: function(e){
        this.props.onChange(e.target.value);
    },
    componentDidMount : function() {
        this.setState({$selector:$(this.getDOMNode())});
        this.state.$selector.on("change", this.changeFunc);
    },
    render: function() {
        return <textarea
        className="ckeditor"
        name="editor1"
        value= {this.props.text}>
        </textarea>;
    }
});
