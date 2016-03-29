var React = require('react');
var Todo = require('./todo.js');

var TodoList = React.createClass({displayName: "TodoList",
    handleToggle: function (id) {
        this.props.onChange(id);
    },

    render: function () {
        var todoList = this.props.savedTodoList.map (function (todo) {
            return (
                React.createElement(Todo, {
                    key:  todo.id, 
                    todo:  todo, 
                    onToggle:  this.handleToggle})
            );
        }, this);
        var divStyle = {
            marginTop: '10px'
        };

        return (
            React.createElement("div", {style: divStyle}, 
                React.createElement("ul", null,  todoList )
            )
        );
    }
});
module.exports = TodoList;