import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const userData = response.data;
      login(userData);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.message);

      if (error.response && error.response.status === 401) {
        setError('Login failed. Please check your credentials and try again.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}

        {/* New registration link */}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
