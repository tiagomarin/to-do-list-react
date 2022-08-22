import React from "react"
import TodoItem from "./TodoItem";

class ToDosListPlaceholder extends React.Component {
  render() {
    return (
      <ul>
        {this.props.toDoItems.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            checkBoxToggleProps={this.props.checkBoxToggleProps}
            deleteItemProps={this.props.deleteItemProps}
          />
        ))}
      </ul>
    );
  };
};

export default ToDosListPlaceholder
