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
      </li>
    );
  };
};

export default TodoItem;
