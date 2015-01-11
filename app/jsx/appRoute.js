
var routes = (
    <ReactRouter.Route name="app" path="/" handler={AppTemplate}>
        <ReactRouter.Route name="inbox" path="inbox/" handler={MarkdownPage}/>
        <ReactRouter.Route name="calendar" handler={CKEditorPage}/>
        <ReactRouter.Route name="components/" path="components/:component" handler={ComponentsTemplate}>
            <ReactRouter.Route name="markdown" handler={MarkdownPage}/>
        </ReactRouter.Route>
        <ReactRouter.NotFoundRoute handler={NotFoundPage}/>
    </ReactRouter.Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
