var React = require('react');

var Todo = React.createClass({displayName: "Todo",
    handleClick: function () {
        var todo = this.props.todo;
        this.props.onToggle(todo.id);
    },

    render: function () {
        var todo = this.props.todo;
        var liClassName = "done-" + todo.done;

        if (todo.done) {
            return (
                React.createElement("li", {key: todo.id}, 
                    React.createElement("input", {
                        type: "checkbox", 
                        onClick:  this.handleClick, 
                        defaultChecked: true}), 
                    React.createElement("span", {className: liClassName}, todo.text)
                )
            );
        } else {
            return (
                React.createElement("li", {key: todo.id}, 
                    React.createElement("input", {
                        type: "checkbox", 
                        onClick: this.handleClick}), 
                    React.createElement("span", {className: liClassName}, todo.text)
                )
            );
        }
    }
});

module.exports = Todo;