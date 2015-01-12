/** @jsx React.DOM */

var ListPage = React.createClass({
    getInitialState: function () {
        var PRODUCTS = [
        {
            "id": 1, "name": "Bag of suck", "price": 100,
            "details": "You don't want to own this!"
        },
        {
            "id": 2, "name": "Bag of luck", "price": 200,
            "details": "You might want to own this!"
        },
        {
            "id": 3, "name": "Bag of fuck", "price": 300,
            "details": "You really want to own this!"
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
