/** @jsx React.DOM */
var ComponentsTemplate = React.createClass({
    mixins: [ ReactRouter.State ],
    checkActive: function(selecter, selectedComponent){
        return (selecter === selectedComponent)?
        'list-group-item active' : 'list-group-item';
    },
    selectComponent: function(component){
        switch (component){
            case 'markdown':
                return (<MarkdownPage />);
            case 'dialog':
                return (<DialogPage />);
            case 'button':
                return (<ButtonPage />);
            case 'CKEditor':
                return (<CKEditorPage />);
            case 'reactable':
                return (<ReactablePage />);
            case 'select2':
                return (<Select2Page />);
            case 'list':
                return (<ListPage />);
            default:
                return (<NotFoundPage />);
        }
    },
    render: function () {
        var selectedComponent = this.getParams().component;
        return (
            <section className='container'>
            <p children='Components'/>
            <div className='row'>
            <div className='col-sm-4 list-group'>
                <a href='#/components/markdown'
                className={this.checkActive('markdown', selectedComponent)}
                children='markdown' />
                <a href='#/components/dialog'
                className={this.checkActive('dialog', selectedComponent)}
                children='dialog' />
                <a href='#/components/button'
                className={this.checkActive('button', selectedComponent)}
                children='button' />
                <a href='#/components/CKEditor'
                className={this.checkActive('CKEditor', selectedComponent)}
                children='CKEditor' />
                <a href='#/components/reactable'
                className={this.checkActive('reactable', selectedComponent)}
                children='reactable' />
                <a href='#/components/select2'
                className={this.checkActive('select2', selectedComponent)}
                children='select2' />
                <a href='#/components/list'
                className={this.checkActive('list', selectedComponent)}
                children='list' />
            </div>
            <div className='col-sm-8'
            children={this.selectComponent(selectedComponent)} />
            </div>
            </section>
    );
}
});
