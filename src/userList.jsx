import React from 'react'

const userList = () => {
     const users = [
        {id: 1, name: "Alice", age: 23},
        {id: 2, name: "Love",  age: 20},
        {id: 3, name: "Israel", age: 45},
    ];
  return (
    <div>
      {users.map(user => {
        <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
        </div>

      })}

    </div>
  )
}

export default userList;
