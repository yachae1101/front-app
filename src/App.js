import React from "react";
import "./App.css";
import UserItem from "./UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // 컴포넌트가 메모리에 로드되면 호출되는 메서드
  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }, // 올바른 'headers' 소문자 사용
    };

    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({ items: data });
        },
        (error) => {
          console.log("Error fetching users:", error);
        }
      );
  }

  render() {
    let userItems = this.state.items.length > 0 && (
      <div>
        {this.state.items.map((item, idx) => (
          <UserItem item={item} key={item.id} />
        ))}
      </div>
    );

    return (
      <div className="App">
        <h3>User List</h3>
        <hr />
        {userItems}
      </div>
    );
  }
}

export default App;
