import Product from "./component/Product";
import Person from "./Person";


const App = () => {
  return (
    <div>
      <Person name="Paul" age={19} />
      <Product name="Paulis" price={1234}/>
    </div>
  ); 
  
};

export default App;