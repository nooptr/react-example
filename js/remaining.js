var React = require('react');

var RemainingBox = React.createClass({displayName: "RemainingBox",
    handleOnClick: function (event) {
        event.preventDefault();
        this.props.onArchive();
    },

    render: function () {
        var todoList = this.props.savedTodoList;
        var remaining = 0;
        todoList.map(function (todo) {
            remaining += todo.done ? 0 : 1;
        });
        var length = this.props.savedTodoList.length;
        return (
            React.createElement("p", null, 
                remaining, " of ", length, " remaining [ ", React.createElement("a", {href: "#", onClick:  this.handleOnClick}, " archive "), " ]"
            )
        );
    }
});

module.exports = RemainingBox;