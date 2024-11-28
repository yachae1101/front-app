import React from "react";

class UserItem extends React.Component {
  render() {
    const { id, name, phone, birthday } = this.props.item; // props로 전달된 데이터 구조에 맞게 사용
    return (
      <div className="UserList">
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Birthday:</strong> {birthday}
        </p>
        <hr />
      </div>
    );
  }
}

export default UserItem;
