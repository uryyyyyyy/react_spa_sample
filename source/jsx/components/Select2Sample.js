/** @jsx React.DOM */

var Select2Sample = React.createClass({
    getInitialState: function () {
        return {$selector : null};
    },
    changeFunc : function(e){
        console.log('select2 changed');
        this.props.onChange(this.state.$selector.select2('data'));
    },
    componentDidMount : function() {
        console.log("initialize select2");
        var initData = [
            {id: "Pete Hunt", text: "select1"},
            {id: "Jordan Walke", text: "select2"}
        ];
    //when real dom is created, $selector is desided
        this.setState({$selector:$(this.getDOMNode())});
        this.state.$selector.select2({data: initData});
        this.state.$selector.select2('val', initData[0].id);
        this.state.$selector.on("change", this.changeFunc);
    },
    render: function() {
        console.log("recreate select2");
        if(this.state.$selector){
            this.state.$selector.select2('val', this.props.field.id);
        }
        var thisStyle = {
            width:'300px'
        };
        return <input type="hidden" style={thisStyle}></input>;
    }
});
