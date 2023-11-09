import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import Categorie from './components/Categorie';
import Voyages from './components/Voyages';
import Cuisines from './components/Cuisines';
import Technologies from './components/Technologies';
import Articles from './components/Articles';
import ArticlesDetails from './components/ArticlesDetails';

function App() {
  return (
    <div className="container">
     
     <Routes>
        <Route index element={<Acceuil />} />
        <Route path='/categories' >
          <Route index  element={<Categorie />} />
          <Route path='voyages' element={<Voyages />} />
          <Route path='cuisines' element={<Cuisines />} />
          <Route path='technologies' element={<Technologies />} />
        </Route>
        <Route path='/articles'>
          <Route index element={<Articles /> }/>
          <Route path=':id' element={<ArticlesDetails />}  />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
