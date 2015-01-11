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
        var cke = CKEDITOR.replace(this.state.id);
        cke.setData(this.props.text);
        cke.on('change', this.changeFunc);
        this.setState({ckeditor: cke});
    },
    render: function() {
        return <textarea id={this.state.id}></textarea>;
    }
});
