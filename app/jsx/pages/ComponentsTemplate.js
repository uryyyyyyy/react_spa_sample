/** @jsx React.DOM */
var ComponentsTemplate = React.createClass({
    mixins: [ ReactRouter.State ],
    checkActive: function(selecter){
        if(selecter === "inbox2"){
            return "list-group-item active";
        }else{
            return"list-group-item";
        }
    },
     render: function () {
        return (
            <section className="container">
            <PTag text="Components"/>
            <div className="row">
            <div className="col-sm-4 list-group">
                <a href="#" className={this.checkActive("inbox2")}>
            Cras justo odio</a>
                <a href="#" className={this.checkActive("inbox")}>Dapibus ac facilisis in</a>
                <a href="#" className={this.checkActive("inbox")}>Morbi leo risus</a>
            </div>
            <div className="col-sm-8">
                <ReactRouter.RouteHandler />
            </div>
            </div>
            </section>
    );
}
});
