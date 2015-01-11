/** @jsx React.DOM */
var DialogPage = React.createClass({
    open: function () {
        this.refs.modal.open();
    },
    render: function() {
        return (
            <div>
                <ReactBootstrap.Button bsStyle="primary"
                children="dialog open" onClick={this.open} />
                <ModalDialog ref="modal" title={"Title dayo"} />
            </div>
        );
    }
});
