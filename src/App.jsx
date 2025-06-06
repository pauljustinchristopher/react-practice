
const App = () => {
  const usersInfo = [
    {
      userName: "Paul",
      email: "test@gmail.com",
      location: "USA",
    },
    {
      userName: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      userName: "Justin",
      email: "thy f@gmail.com",
      location: "Niger",
    }
  ];

  return ( 
  <main>
    { usersInfo.map(({ userName, email, location}) => (
      <ul key={Math.random()}>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{location}</li>
      </ul>
    ))}
  </main>

  );
};

export default App;