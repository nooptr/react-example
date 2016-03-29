var React = require('react');
var Todo = require('./todo.js');

var TodoList = React.createClass({
    handleToggle: function (id) {
        this.props.onChange(id);
    },

    render: function () {
        var todoList = this.props.savedTodoList.map (function (todo) {
            return (
                <Todo
                    key={ todo.id }
                    todo={ todo }
                    onToggle={ this.handleToggle } />
            );
        }, this);
        var divStyle = {
            marginTop: '10px'
        };

        return (
            <div style={divStyle}>
                <ul>{ todoList }</ul>
            </div>
        );
    }
});
module.exports = TodoList;