import React from 'react';

const ShoeList = () => {
  // Sample shoe data
  const shoes = [
    { id: 1, name: 'Shoe 1', price: 50 },
    { id: 2, name: 'Shoe 2', price: 60 },

    // Add more shoe data
  ];

  return (
    <div className="shoe-list-container">
      <h1>Shoe List</h1>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id} className="shoe-card">
            {shoe.name} - ${shoe.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
