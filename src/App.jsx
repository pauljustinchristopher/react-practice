const validPassword = () => <h1>Valid Password</h1>;

const invalidPassword = () => <h1>Invalid Password</h1>;

const passWord = ({ isValid }) => {
  if(isValid) {
    return <validPassword />;
  }

  return <invalidPassword />;
}

const App = () => {
  return (
    <section>
    <passWord isValid = {true} />
    </section>
  );
}; 