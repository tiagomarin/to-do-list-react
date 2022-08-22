import React from "react"
import Header from "./Header";
import ToDosListPlaceholder from "./ToDosListPlaceholder";

class TodoContainer extends React.Component {
  state = {
    toDoItems: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  render() {
    return (
      <>
        <Header />
        <ToDosListPlaceholder
          toDoItems={this.state.toDoItems}
          checkBoxToggleProps={this.checkBoxToggle}
          deleteItemProps={this.deleleItem}
        />
      </>
    )
  };
};

export default TodoContainer
