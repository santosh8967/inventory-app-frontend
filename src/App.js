import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoeList from './components/ShoeList';
import ShoeForm from './components/ShoeForm';
import BillingForm from './components/BillingForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';

// Import CSS files from static file server
import './styles/BillingForm.css?v1'; // Import billingform.css
import './styles/Dashboard.css?v1'; // Import dashboard.css
import './styles/LoginForm.css?v1'; // Import loginform.css
import './styles/ShoeForm.css?v1'; // Import shoeform.css
import './styles/ShoeList.css?v1'; // Import shoelist.css

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shoes" element={<ShoeList />} />
          <Route path="/add" element={<ShoeForm />} />
          <Route path="/billing" element={<BillingForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
