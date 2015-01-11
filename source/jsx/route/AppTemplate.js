/** @jsx React.DOM */
var AppTemplate = React.createClass({
    render: function () {
        return (
            <section className='container'>
            <header className='navbar navbar-default'>
            <a className='navbar-brand' href='#' children='Sample' />
            <ul className='nav navbar-nav'>
                <ComponentManu />
                <SamplesManu />
            </ul>
            <LoginLogout />
            </header>

            <ReactRouter.RouteHandler />

            <footer className='footer'>
            <p children='supported by uryyyyyyy' />
            </footer>
            </section>
        );
    }
});
