import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Default from './pages/Default';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Default />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
