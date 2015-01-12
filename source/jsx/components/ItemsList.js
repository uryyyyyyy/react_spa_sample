/** @jsx React.DOM */

var ItemsList = React.createClass({
    getInitialState: function() {
        return {
            expandedProductId: null
        };
    },
    handleProductClick: function(product) {
        if (this.state.expandedProductId === product.id) {
            this.setState({expandedProductId: null});
        }else{
            this.setState({expandedProductId: product.id});
        }
    },
    checkExpanded: function(product){
        if (this.state.expandedProductId === product.id) {
            return(<div>{product.details}</div>);
        }else{
            return(<div></div>);
        }
    },
    addStyle: function(product){
        if (this.state.expandedProductId === product.id) {
            return {color: 'black'};
        }else{
            return {color: 'gray'};
        }
    },
    func: function(product){
        return (
            <li key={product.id}
            onClick={this.handleProductClick.bind(this, product)}
            style={this.addStyle(product)}>
            {product.name} ({product.price})
            {this.checkExpanded(product)}
            </li>
        );
    },
    render: function() {
        var products = this.props.products.map(this.func);
        return (
            <ul>
            {products}
            </ul>
        );
    }
});
