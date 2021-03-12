import react, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const persons = {
    name: "jewel rana",
    job: "knit concern group",
    phone: "0170848728",
  };

  const nayoks = [
    "jewel rana",
    "suhel rana",
    "kamal hussain",
    "kalam",
    "jamal",
    "tomal",
  ];
  const products = [
    { name: "Photoshope", price: "$499" },
    { name: "ilustrator", price: "$550" },
    { name: "vs code", price: "$50" },
  ];
  const productNames = products.map((product) => product);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
        <br />
        {products.map((product) => (
          <div>
            {" "}
            {product.name} {product.price}
          </div>
        ))}
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  const userContainer= {
      border: "2px solid red",
      borderRadius: "10px",
      padding:"10px",
      margin:"10px"
  }
  return (
    
    <div >
      <h4>total user : {users.length}</h4>
      {
        users.map(user => <div style = {userContainer}>
          
          <h2>Name: {user.name}</h2>
          <h3>phone: {user.phone}</h3>
          <h3>Email: {user.email}</h3>
          <p>website: {user.website}</p>
          </div>)
      }
      <h2>this is user</h2>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
   
  };
  const decreaseHandler = () => {
    if (count <= 0) {
      setCount(count);
    }
   
    else {
      const newDecrease = count - 1;
      setCount(newDecrease);
    }
  };
  return (
    <div className="">
      <h1>Count:{count}</h1>
      <button onClick={decreaseHandler}>decrease count</button>
      <button onClick={increaseHandler}>increase count</button>
    </div>
  );
}
function Product(props) {
  const styelPersone = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    width: "400px",
    height: "200px",
    backgroundColor: "gray",
  };
  const { name, price } = props.product;
  return (
    <div style={styelPersone}>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </div>
  );
}

export default App;
