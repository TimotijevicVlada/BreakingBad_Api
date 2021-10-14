import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Search from './components/Search';
import './App.css';
import Footer from './components/Footer';

function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

   //Pagination
   const [pageNumber, setPageNumber] = useState(0);
   const itemsPerPage = 10;
   const pagesVisited = pageNumber * itemsPerPage;
   const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage);
   const pageCount = Math.ceil(data.length / itemsPerPage);
   const changePage = ({ selected }) => {
     setPageNumber(selected);
   };

  useEffect(() => {
    const fetchApi = async () => {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await response.json();
        console.log(data)
        setData(data);
        setLoading(false);
  }
  fetchApi();
  }, [name])
  

  return (
    <div className="App">
      <Header />
      <Search getName={(name) => setName(name)} />
      <Main displayItems={displayItems} pageCount={pageCount} changePage={changePage} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
