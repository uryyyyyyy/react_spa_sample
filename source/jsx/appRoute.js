
var routes = (
    <ReactRouter.Route name="app" path="/" handler={AppTemplate}>
        <ReactRouter.Route name="components/"
            path="components/:component"
            handler={ComponentsTemplate} />
        <ReactRouter.Route name="samples/"
            path="samples/:page"
            handler={SamplesTemplate} />
        <ReactRouter.NotFoundRoute handler={NotFoundPage}/>
    </ReactRouter.Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
