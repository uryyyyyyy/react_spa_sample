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

    render: function() {
        var self = this
        var noneSelected = this.state.expandedProductId === null;
        var products = this.props.products.map(function(product) {
            var details, isExpanded = self.state.expandedProductId === product.id;

            if (isExpanded) {
                details = <div>{product.details}</div>;
            }

            return (
                <li key={product.id}
                onClick={self.handleProductClick.bind(self, product)}
                className={isExpanded || noneSelected ? '' : 'collapsed'}>
            {product.name} ({product.price})
            {details}
            </li>
            );
        });
        return (
            <ul>
            {products}
            </ul>
        );
    }
});
