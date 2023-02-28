// import router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import File




// import css
import './App.css';
import Einzelseite from './page/Einzelseite.jsx';
// import HomeAuswahl from './component/homeAuswahl/HomeAuswahl';
import Home from './page/Home';
import PageListe from './page/PageListe';
import PageRandom from './page/PageRandom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route exact path="/" element={<Home> </Home>}    > </Route>

          <Route exact path="/PageListe" element={<PageListe> </PageListe>}    > </Route>

          <Route exact path="/PageRandom" element={<PageRandom> </PageRandom>}    > </Route>

          <Route exact path="/Einzelseite/:_id" element={<Einzelseite> </Einzelseite>}    > </Route>

        </Routes>


      </BrowserRouter>






    </div>
  );
}

export default App;
