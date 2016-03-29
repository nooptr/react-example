var React = require('react');
var ReactDOM = require('react-dom');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var Todo = require('./todo.js');
var TodoInput = require('./todo_input.js');
var RemainingBox = require('./remaining.js');
var TodoList = require('./todo_list.js');

var App = React.createClass({
    getInitialState: function () {
        return {
            size: 2,
            savedTodoList: [
                { id: 1, text: 'learn react', done: true },
                { id: 2, text: 'build an app react', done: false }
            ]
        };
    },

    handleSaveTodo: function (todo) {
        var todoList = this.state.savedTodoList;
        var size = this.state.size;
        var todoList = todoList.concat(
            {
                id: (size + 1),
                text: todo.text,
                done: todo.done
            }
        );
        this.setState({
            savedTodoList: todoList,
            size: this.state.size + 1
        });
    },

    handleOnArchive: function () {
        var todoList = this.state.savedTodoList;
        todoList = todoList.filter (function (todo) {
            if (todo.done != true) {
                return todo;
            }
        });
        this.setState({
            savedTodoList: todoList
        });
    },

    handleChange: function (id) {
        var todoList = this.state.savedTodoList;
        todoList = todoList.map (function (todo) {
            if (todo.id != id) {
                return todo;
            } else {
                return {
                    id: todo.id,
                    text: todo.text,
                    done: todo.done ? false : true
                };
            }
        });
        this.setState({
            savedTodoList: todoList,
        });
    },

    render: function() {
        return (
            <div>
                <RemainingBox
                    savedTodoList={ this.state.savedTodoList }
                    onArchive={ this.handleOnArchive }
                />
                <TodoInput
                    onSaveTodo={ this.handleSaveTodo } />
                <TodoList
                    savedTodoList={ this.state.savedTodoList }
                    onChange={ this.handleChange } />
            </div>
        );
    }
});

module.exports = App;