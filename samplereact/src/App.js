import './app.css';
import Header from './components/Header';

function App() {
  let data = "by Nidhish";
  return (
    <div>
          <h1 style={{ color: 'blue' , fontSize: '2rem', fontFamily: 'Arial' }}>Welcome to React {data}</h1>
          <br></br>
          {hello()}
          {hello()}
          <Header data={data}/>
    </div>


  )
}
function hello(){
  return(<p className="hello">This is a sample React application.</p>)
}
export default App;
