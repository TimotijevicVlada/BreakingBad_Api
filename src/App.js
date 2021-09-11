import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Search from './components/Search';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await response.json();
        console.log(data)
        setData(data);
  }
  fetchApi();
  }, [name])
  

  return (
    <div className="App">
      <Header />
      <Search getName={(name) => setName(name)}/>
      <Main data={data}/>
    </div>
  );
}

export default App;
