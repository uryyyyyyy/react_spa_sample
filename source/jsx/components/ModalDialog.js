/** @jsx React.DOM */

var ModalDialog = React.createClass({
    getInitialState: function () {
        return {$selector : null};
    },
    componentDidMount: function() {
        // When the component is added, turn it into a modal
        this.setState({$selector:$(this.getDOMNode())});
        var options = {
            keyboard: true,
            show: false
        };
        $(this.getDOMNode()).modal(options);
    },
    open: function() {
        this.state.$selector.modal('show');
    },
    close: function() {
        this.state.$selector.modal('hide');
    },
    render: function() {
        return (
            <div className='modal fade'>
            <div className='modal-dialog'>
            <div className='modal-content'>
            <div className='modal-header'>
            <h3>{this.props.title}</h3>
            </div>
            <div className='modal-body'>
        {this.props.dialogBody}
            </div>
            <div className='modal-footer'>
        {this.props.dialogFooter}
            </div>
            </div>
            </div>
            </div>
        );
    }
});
