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
                <PrimaryButton text="up button" onClick={this.countUp} />
                <PrimaryButton text="down button" onClick={this.countDown} />
                <PTag text={"count : " + this.state.count} />
            </div>
        );
    }
});
