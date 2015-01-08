/** @jsx React.DOM */
var AppTemplate = React.createClass({
    render: function () {
        return (
            <section className="container">
            <header className="navbar navbar-default">
            <a className="navbar-brand" href="#">SimpleWebDevTool</a>
            <ul className="nav navbar-nav">
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Components<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
            <li><a href="#/components/button">button</a></li>
            <li><a href="#/components/modalDialog">modalDialog</a></li>
            <li><a href="#/components/select2">select2</a></li>
            <li><a href="#/components/markdown">markdown</a></li>
            <li><a href="#/components/ckeditor">CKEditor</a></li>
            <li><a href="#/components/reactable">reactable</a></li>
            <li className="divider"></li>
            <li><a href="#">Not Yet</a></li>
            </ul>
            </li>
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Other<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
            </ul>
            </li>
            </ul>
            <section id="login_logout_form" className="navbar-form navbar-right"></section>
            </header>

            <ReactRouter.RouteHandler />

            <footer className="footer">
            <p> supported by uryyyyyyy </p>
            </footer>
            </section>
    );
}
});
