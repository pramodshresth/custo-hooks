import logo from './logo.svg';
import './App.css';
import useFetch from './custom-hooks/custom_hooks';

function App() {
  const {loading, data} = useFetch("https://jsonplaceholder.typicode.com/todos");

  console.log(data);
  return (
    <div className="App">
        {loading===true ? <p> Data is Loading</p> : data.length===0? <h2>No Data Found</h2>: data.map((e)=>{
          return <p>{e.title}</p>
        })}
        {
        
        }
    </div>
  );
}

export default App;
