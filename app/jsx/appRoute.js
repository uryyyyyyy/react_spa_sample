jQuery(function() {
    'use strict';
    var app = Sammy('#SimpleWebDevTool', function(app) {
        // define a 'get' route that will be triggered at '#/path'
        app.get('#/jquery/:id', function(context) {
            console.log('access to #/jquery');
            $('#template').html(_.template(simpleWebDevTool.util.render('jqueryTemplate')));
            simpleWebDevTool.controller.jqueryController(context.params.id);
        });

        app.notFound = function(context) {
            console.log('access to #');
            React.render(
                <CommentBox />,
                document.getElementById('content')
            );
        }
    });
    app.run();
});
