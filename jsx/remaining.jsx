var React = require('react');

var RemainingBox = React.createClass({
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
            <p>
                {remaining} of {length} remaining [ <a href="#" onClick={ this.handleOnClick }> archive </a> ]
            </p>
        );
    }
});

module.exports = RemainingBox;