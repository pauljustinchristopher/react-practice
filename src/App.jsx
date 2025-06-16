// const ValidPassword = () => <h1>Valid Password</h1>;

import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main"; 
import Person from "./component/Person";
import WelcomeMessage from "./component/WelcomeMessage";
import Password from "./component/Password";

// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const PassWord = ({ isValid }) => isValid? <ValidPassword /> : <InvalidPassword />


// const App = () => {
//   return (
//     <section>
//     <PassWord isValid = {true} />
//     </section>
//   );
// }; 


// const Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return <div>
//     <h1>Cart 🛒</h1>
//     {items.length > 0 && <h2>You have {items.length} items in your Cart</h2> }
//   </div>
// }

const App = () => {
  return(
  <>
    <WelcomeMessage /> 
    <Header />
    <Main />
    <Footer />
    <Password isValid={true} />
    {/* <Person name="Paul" age={21} /> */}
    
  </>
)}


export default App;