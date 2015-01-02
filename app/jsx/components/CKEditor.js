/** @jsx React.DOM */

var CKEditor = React.createClass({
    getInitialState: function () {
        return {
            ckeditor: null,
            id:random()
        };
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return false;
    },
    changeFunc: function(e){
        var cke = this.state.ckeditor.getData();
        this.props.onChange(cke);
    },
    componentWillUnmount : function() {
        this.state.ckeditor.destroy();
    },
    componentDidMount : function() {
        this.setState({ckeditor: CKEDITOR.replace(this.state.id)});
        this.state.ckeditor.setData(this.props.text);
        this.state.ckeditor.on('change', this.changeFunc);
    },
    render: function() {
        return <textarea id={this.state.id}></textarea>;
    }
});
