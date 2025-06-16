import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Paul", age: 21 },
        { id: 2, name: "Unique", age: 18 },
        { id: 3, name: "Gaby", age: 17 },
    ]


  return (
    <div>
      {users.map((user) => {
        <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
        </div>
      })}
    </div>
  );
}

export default UserList
