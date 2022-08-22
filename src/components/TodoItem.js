import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.checkBoxToggleProps(this.props.item.id)}
        />
        {this.props.item.title}
        <button onClick={() => this.props.deleteItemProps(this.props.item.id)}>
          Delete
        </button>
      </li>
    );
  };
};

export default TodoItem;
