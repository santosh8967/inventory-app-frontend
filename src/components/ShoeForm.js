import React, { useState } from 'react';

const ShoeForm = () => {
  const [shoeName, setShoeName] = useState('');
  const [shoePrice, setShoePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className="shoe-form-container">
      <h1>Add New Shoe</h1>
      <form onSubmit={handleSubmit} className="shoe-form">
        <input
          type="text"
          placeholder="Shoe Name"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={shoePrice}
          onChange={(e) => setShoePrice(e.target.value)}
          required
        />
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
};

export default ShoeForm;
