// const ValidPassword = () => <h1>Valid Password</h1>;

import Greet from "./component/Greet";
import Header from "./component/Header";

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
    <Header />
    <Greet />
  </>
)}


export default App;