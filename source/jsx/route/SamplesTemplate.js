/** @jsx React.DOM */
var SamplesTemplate = React.createClass({
    mixins: [ ReactRouter.State ],
    checkActive: function(selecter, selectedComponent){
        return (selecter === selectedComponent)?
        "list-group-item active" : "list-group-item"
    },
    selectComponent: function(component){
        switch (component){
            case 'search':
                return (<MarkdownPage />);
                break;
            case 'edit':
                return (<DialogPage />);
                break;
            default:
                return (<NotFoundPage />);
                break;
        }
    },
    render: function () {
        var selectedComponent = this.getParams().page;
        return (
            <section className="container">
            <p children="Components"/>
            {this.selectComponent(selectedComponent)}
            </section>
    );
}
});
