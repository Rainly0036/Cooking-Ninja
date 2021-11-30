import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from '../Components/NavBar/NavBar'
import Home from '../Pages/Home/Home'
import Recipe from '../Pages/Recipe/Recipe'
import Search from '../Pages/Search/Search'
import Create from '../Pages/Create/Create'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
