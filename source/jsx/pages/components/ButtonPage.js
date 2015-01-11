/** @jsx React.DOM */
var ButtonPage = React.createClass({
    getInitialState: function () {
        return { count: 0  };
    },
    countUp: function () {
        this.setState( {count: this.state.count + 1 });
    },
    countDown: function () {
        this.setState( {count: this.state.count - 1 });
    },
    render: function() {
        return (
            <div>
                <ReactBootstrap.Button bsStyle="primary"
                children="up button" onClick={this.countUp} />
                <ReactBootstrap.Button bsStyle="primary"
                children="down button" onClick={this.countDown} />
                <p children={"count : " + this.state.count} />
            </div>
        );
    }
});
