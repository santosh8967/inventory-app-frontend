// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ShoeList from './components/ShoeList';
// import ShoeForm from './components/ShoeForm';
// import BillingForm from './components/BillingForm';
// import Dashboard from './components/Dashboard';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import { useAuth } from './context/AuthContext';
// import './styles/BillingForm.css';
// import './styles/Dashboard.css';
// import './styles/LoginForm.css';
// import './styles/ShoeForm.css';
// import './styles/ShoeList.css';

// function App() {
//   const { user } = useAuth();

//   return (
//     <Router>
//       <Routes>
//         {/* Redirect to dashboard if logged in */}
//         <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginForm />} />
//         {/* Protected routes requiring login */}
//         {user && (
//           <>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/shoelist" element={<ShoeList />} />
//             <Route path="/shoeform" element={<ShoeForm />} />
//             <Route path="/billingform" element={<BillingForm />} />
//           </>
//         )}
//         {/* Unprotected routes accessible to everyone */}
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegistrationForm />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShoeList from './components/ShoeList';
import ShoeForm from './components/ShoeForm';
import BillingForm from './components/BillingForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { useAuth } from './context/AuthContext';
import './styles/BillingForm.css';
import './styles/Dashboard.css';
import './styles/LoginForm.css';
import './styles/ShoeForm.css';
import './styles/ShoeList.css';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard if logged in */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginForm />} />
        {/* Protected routes requiring login */}
        {user && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shoelist" element={<ShoeList />} />
            <Route path="/shoeform" element={<ShoeForm />} />
            <Route path="/billingform" element={<BillingForm />} />
          </>
        )}
        {/* Unprotected routes accessible to everyone */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;


