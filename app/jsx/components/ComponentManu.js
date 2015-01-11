/** @jsx React.DOM */

//dupricated
var ComponentManu = React.createClass({
    render: function() {
        return (
            <li className="dropdown">
            <a href="#"
            className="dropdown-toggle"
            data-toggle="dropdown">Components<span className="caret"></span>
            </a>
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
        );
    }
});
