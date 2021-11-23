import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { CountryDetailpage } from './pages/CountryDetailpage'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:code" element={<CountryDetailpage/>} />
      </Routes>
    </div>
  );
}

export default App;
