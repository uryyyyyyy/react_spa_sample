/** @jsx React.DOM */
var AppTemplate = React.createClass({
    render: function () {
        return (
            <section className="container">
            <header className="navbar navbar-default">
            <a className="navbar-brand" href="#" children='Sample' />
            <ul className="nav navbar-nav">
                <ComponentManu />
                <OtherManu />
            </ul>
            <section id="login_logout_form" className="navbar-form navbar-right">
            <LoginForm />
            </section>
            </header>

            <ReactRouter.RouteHandler />

            <footer className="footer">
            <p> supported by uryyyyyyy </p>
            </footer>
            </section>
    );
}
});
