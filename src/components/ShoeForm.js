// import React, { useState } from 'react';

// const ShoeForm = () => {
//   const [shoeName, setShoeName] = useState('');
//   const [shoePrice, setShoePrice] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle form submission (e.g., send data to the server)
//   };

//   return (
//     <div className="shoe-form-container">
//       <h1>Add New Shoe</h1>
//       <form onSubmit={handleSubmit} className="shoe-form">
//         <input
//           type="text"
//           placeholder="Shoe Name"
//           value={shoeName}
//           onChange={(e) => setShoeName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={shoePrice}
//           onChange={(e) => setShoePrice(e.target.value)}
//           required
//         />
//         <button type="submit">Add Shoe</button>
//       </form>
//     </div>
//   );
// };

// export default ShoeForm;

import React, { useState } from 'react';

const ShoeForm = () => {
  // Add additional state variables for other shoe details like brand, size, color, etc.
  const [shoeName, setShoeName] = useState('');
  const [shoeBrand, setShoeBrand] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [shoeColor, setShoeColor] = useState('');
  const [shoePrice, setShoePrice] = useState('');

  // Update handle submit function to include additional data
  const handleSubmit = (e) => {
    e.preventDefault();

    const newShoe = {
      name: shoeName,
      brand: shoeBrand,
      size: shoeSize,
      color: shoeColor,
      price: parseFloat(shoePrice),
    };

    // Handle form submission (e.g., send data to the server)
    // Example using Fetch API
    fetch('/api/shoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newShoe),
    }).then(() => {
      // Clear form fields after successful submission
      setShoeName('');
      setShoeBrand('');
      setShoeSize('');
      setShoeColor('');
      setShoePrice('');
    });
  };

  return (
    <div className="shoe-form-container">
      <h1>Step into Style: Add Your New Shoe</h1>
      <form onSubmit={handleSubmit} className="shoe-form">
        <label htmlFor="shoeName">Shoe Name:</label>
        <input
          type="text"
          id="shoeName"
          placeholder="Enter the shoe's name"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
          required
        />
        <label htmlFor="shoeBrand">Brand:</label>
        <input
          type="text"
          id="shoeBrand"
          placeholder="Which brand is it?"
          value={shoeBrand}
          onChange={(e) => setShoeBrand(e.target.value)}
          required
        />
        <label htmlFor="shoeSize">Size:</label>
        <input
          type="number"
          id="shoeSize"
          placeholder="What's your fit?"
          value={shoeSize}
          onChange={(e) => setShoeSize(e.target.value)}
          required
        />
        <label htmlFor="shoeColor">Color:</label>
        <input
          type="text"
          id="shoeColor"
          placeholder="Let your color shine!"
          value={shoeColor}
          onChange={(e) => setShoeColor(e.target.value)}
          required
        />
        <label htmlFor="shoePrice">Price:</label>
        <input
          type="number"
          id="shoePrice"
          placeholder="What's the cost of cool?"
          value={shoePrice}
          onChange={(e) => setShoePrice(e.target.value)}
          required
        />
        <button type="submit">Add Your Shoe!</button>
      </form>
    </div>
  );
};

export default ShoeForm;
