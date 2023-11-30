import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/register`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Registration successful:', response.data);
      navigate('/login');  // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.message);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="registration-form-container">
      <h1>Register</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
