import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Detail from './views/Detail';
import FormCreationAuthor from './views/FormCreationAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/autores' element={<Home/>}/>
          <Route path='/autores/:id' element={<Detail/>}/>
          <Route path='/crear-autor' element={<FormCreationAuthor />} />
          <Route path='/editar-autor/:id' element={<FormCreationAuthor />} />
          <Route path='/eliminar-autor/:id' element={<FormCreationAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
