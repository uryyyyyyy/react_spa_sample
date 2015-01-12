/** @jsx React.DOM */

var ListPage = React.createClass({
    getInitialState: function () {
        var PRODUCTS = [
        {
            "id": 1, "name": "Bag1", "price": 100,
            "details": "your detail1"
        },
        {
            "id": 2, "name": "Bag2", "price": 200,
            "details": "your detail1"
        },
        {
            "id": 3, "name": "Bag3", "price": 300,
            "details": "your detail1"
        }
        ];
        return { prods:PRODUCTS};
    },
    changeText: function (fi) {
        this.setState( {field: fi });
    },
    render: function() {
        return <ItemsList  products={this.state.prods}/>
    }
});
