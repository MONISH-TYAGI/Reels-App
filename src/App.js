import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import {AuthProvider} from './Context/AuthContext'
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
  path="*"
  element={
    <PrivateRoute>
      <Feed />
    </PrivateRoute>
  }
/>

    </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
