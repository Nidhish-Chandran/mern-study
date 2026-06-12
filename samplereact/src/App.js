import './app.css';
import { useState } from 'react';
import Counter from './components/counter';
// import Header from './components/Header';

function App() {
  const [count,setCount] = useState(0);
  
  // const arr =[1,2,3,4,5];
  // const [j,k,l,m,n] = arr ;    //array destructuring

  // let data = "by Nidhish";
  // let count = 0;

  
  function Addcounter(){
    setCount(count+1);
    // console.log(count);
  }


  return (
    <div>
         <h1>The count is :{count}</h1>
         <button onClick={Addcounter}>Click TO increment </button>
         <Counter count={count}/>
    </div>


  )
}

// function hello(){
//   return(<p className="hello">This is a sample React application.</p>)
// }


export default App;
