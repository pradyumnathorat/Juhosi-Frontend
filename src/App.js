
import './App.css';
import Admin from './componets/Admin';
import Form from './componets/Form';
import Login from './componets/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/form/:id" element={<Form/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
