/** @jsx React.DOM */
var ComponentsTemplate = React.createClass({
    mixins: [ ReactRouter.State ],
    checkActive: function(selecter, selectedComponent){
        return (selecter === selectedComponent)?
        "list-group-item active" : "list-group-item"
    },
    selectComponent: function(component){
        switch (component){
            case 'markdown':
                return (<MarkdownPage />);
                break;
            default:
                return (<NotFoundPage />);
                break;
        }
    },
    render: function () {
        var selectedComponent = this.getParams().component;
        return (
            <section className="container">
            <p children="Components"/>
            <div className="row">
            <div className="col-sm-4 list-group">
                <a href="#/components/markdown"
                className={this.checkActive("markdown", selectedComponent)}
                children='markdown' />
                <a href="#/components/inbox"
                className={this.checkActive("inbox", selectedComponent)}
                children='inbox' />
                <a href="#/components/inbox2"
                className={this.checkActive("inbox2", selectedComponent)}
                children='inbox2' />
            </div>
            <div className="col-sm-8"
            children={this.selectComponent(selectedComponent)} />
            </div>
            </section>
    );
}
});
