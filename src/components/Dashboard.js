import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShoeList from './components/ShoeList';
import ShoeForm from './components/ShoeForm';
import BillingForm from './components/BillingForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { useAuth } from './context/AuthContext';
import './styles/BillingForm.css?v1'; // Import billingform.css
import './styles/Dashboard.css?v1'; // Import dashboard.css
import './styles/LoginForm.css'; // Import loginform.css
import './styles/ShoeForm.css?v1'; // Import shoeform.css
import './styles/ShoeList.css?v1'; // Import shoelist.css

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route path="/shoes" element={user ? <ShoeList /> : <Navigate to="/" />} />
          <Route path="/add" element={user ? <ShoeForm /> : <Navigate to="/" />} />
          <Route
            path="/billing"
            element={user ? <BillingForm /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" /> : <LoginForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
