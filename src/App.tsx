import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          {/* Add other routes as needed */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}