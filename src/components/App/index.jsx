import './bootstrap.min.css';
import './style.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../Nav';
import Form from '../Form';
import Table from '../Table'
import Edit from '../Edit'

function App() {
  return (

    <Router>
      <div className="App">

        <Nav />

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
