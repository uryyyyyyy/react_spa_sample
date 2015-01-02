jQuery(function() {
    'use strict';
    var $content = document.getElementById('content');
    var app = Sammy('#SimpleWebDevTool', function(app) {
        // define a 'get' route that will be triggered at '#/path'
        app.get('#/components/button', function(context) {
            console.log('access to #/components/button');
            React.render(<ButtonPage />, $content);
        });
        app.get('#/components/markdown', function(context) {
            console.log('access to #/components/markdown');
            React.render(<MarkdownPage />, $content);
        });
        app.get('#/components/modalDialog', function(context) {
            console.log('access to #/components/modalDialog');
            React.render(<DialogPage />, $content);
        });

        app.notFound = function(context) {
            console.log('access to #');
            React.render(<TopPage />, $content);
        }
    });
    app.run();
});
