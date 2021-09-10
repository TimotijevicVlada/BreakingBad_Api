import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

function App() {

  const baseUrl = "https://www.breakingbadapi.com/api/characters";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data)
        setData(data);
  }
  fetchApi();
  }, [])
  

  return (
    <div className="App">
      <Header />
      <Main data={data}/>
    </div>
  );
}

export default App;
