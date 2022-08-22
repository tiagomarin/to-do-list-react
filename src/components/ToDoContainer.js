import React from "react"
import Header from "./Header";
import AddItemInput from "./AddItemInput";
import ToDosListPlaceholder from "./ToDosListPlaceholder";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

  checkBoxToggle = (id) => {
    this.setState(prevState => ({
      toDoItems: prevState.toDoItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        };
        return item;
      })
    })
    );
  };

  deleleItem = (id) => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems.filter(item => {
          return item.id !== id;
        })
      ]
    }
    );
  };

  addTodoItem = title => {
    const newToDoItem = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      toDoItems: [...this.state.toDoItems, newToDoItem]
    })
  };

  state = {
    toDoItems: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  render() {
    return (
      <>
        <Header />
        <AddItemInput addTodoProps={this.addTodoItem} />
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
