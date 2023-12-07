// import React from 'react';

// const ShoeList = () => {
//   // Sample shoe data
//   const shoes = [
//     { id: 1, name: 'Shoe 1', price: 50 },
//     { id: 2, name: 'Shoe 2', price: 60 },

//     // Add more shoe data
//   ];

//   return (
//     <div className="shoe-list-container">
//       <h1>Shoe List</h1>
//       <ul>
//         {shoes.map((shoe) => (
//           <li key={shoe.id} className="shoe-card">
//             {shoe.name} - ${shoe.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoeList;

import React from 'react';

const ShoeList = ({ shoes }) => {
  // Conditional rendering if no shoes are available
  if (!shoes || shoes.length === 0) {
    return (
      <div className="shoe-list-container">
        <h1>Shoe List</h1>
        <p>No shoes found. Add some to your collection!</p>
      </div>
    );
  }

  return (
    <div className="shoe-list-container">
      <h1>Step Up Your Style: Check Out Our Shoes</h1>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <span>Brand: {shoe.brand}</span>
            <span>Size: {shoe.size}</span>
            <span>Color: {shoe.color}</span>
            <span>Price: ${shoe.price}</span>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
