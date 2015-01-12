/** @jsx React.DOM */

var ItemsList = React.createClass({
    getInitialState: function() {
        return {
            expandedProductId: null
        };
    },

    handleProductClick: function(product) {
        var newSelectedProductId = product.id;
        if (this.state.expandedProductId === product.id) {
            newSelectedProductId = null;
        }
        this.setState({expandedProductId: newSelectedProductId});
    },
    checkExpanded: function(isExpanded, product){
        if (isExpanded) {
            return(<div>{product.details}</div>);
        }else{
            return(<div></div>);
        }
    },
    func: function(product){
        var details
        var noneSelected = this.state.expandedProductId === null;
        var isExpanded = this.state.expandedProductId === product.id;

        return (
            <li key={product.id}
            onClick={this.handleProductClick.bind(this, product)}
            className={isExpanded || noneSelected ? '' : 'collapsed'}>
            {product.name} ({product.price})
        {this.checkExpanded(isExpanded, product)}
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
