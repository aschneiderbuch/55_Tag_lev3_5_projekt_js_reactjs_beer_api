// import router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import File




// import css
import './App.css';
import HomeAuswahl from './component/homeAuswahl/HomeAuswahl';
import Home from './page/Home';
import PageListe from './page/PageListe';
import PageRandom from './page/PageRandom';

function App() {
  return (
    <div className="App">

<BrowserRouter>

<Routes>

  <Route path="/" element={ <Home> </Home> }    > </Route> 

  <Route path="/home/PageListe" element={ <PageListe> </PageListe>}    > </Route> 

  <Route path="/home/PageRandom" element={ <PageRandom> </PageRandom>}    > </Route> 


</Routes>


</BrowserRouter>






    </div>
  );
}

export default App;
