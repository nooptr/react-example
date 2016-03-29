var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var TodoInput = React.createClass({displayName: "TodoInput",
    getInitialState() {
        return {
            inputText: ""
        };
    },

    onKeyDown: function (e) {
        // 13 = Enter key
        if (e.keyCode == 13) {
            if (e.target.value.length > 0) {
                this.props.onSaveTodo({ text: e.target.value, done: false });
                this.setState({ inputText: "" });
            }
        }
    },

    onClick: function () {
        var inputText = this.refs.inputText.getValue();
        if (inputText.length > 0) {
            this.props.onSaveTodo({ text: inputText, done: false });
            this.setState({ inputText: "" });
        }
    },

    onChange: function () {
        this.setState({
            inputText: this.refs.inputText.getValue()
        });
    },

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Input, {
                    type: "text", 
                    ref: "inputText", 
                    placeholder: "Enter text", 
                    value:  this.state.inputText, 
                    onChange: this.onChange, 
                    groupClassName: "group-class", 
                    labelClassName: "label-class", 
                    onKeyDown:  this.onKeyDown}), 
                React.createElement(Button, {
                    bsStyle: "primary", 
                    bsSize: "small", 
                    onClick:  this.onClick}, "Add"
                )
            )
        );
    }
});

module.exports = TodoInput;