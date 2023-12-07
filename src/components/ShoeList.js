// // import React from 'react';

// // const ShoeList = () => {
// //   // Sample shoe data
// //   const shoes = [
// //     { id: 1, name: 'Shoe 1', price: 50 },
// //     { id: 2, name: 'Shoe 2', price: 60 },

// //     // Add more shoe data
// //   ];

// //   return (
// //     <div className="shoe-list-container">
// //       <h1>Shoe List</h1>
// //       <ul>
// //         {shoes.map((shoe) => (
// //           <li key={shoe.id} className="shoe-card">
// //             {shoe.name} - ${shoe.price}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ShoeList;

// import React from 'react';

// const ShoeList = ({ shoes }) => {
//   // Conditional rendering if no shoes are available
//   if (!shoes || shoes.length === 0) {
//     return (
//       <div className="shoe-list-container">
//         <h1>Shoe List</h1>
//         <p>No shoes found. Add some to your collection!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="shoe-list-container">
//       <h1>Step Up Your Style: Check Out Our Shoes</h1>
//       <ul>
//         {shoes.map((shoe) => (
//           <li key={shoe.id} className="shoe-card">
//             <img src={shoe.image} alt={shoe.name} />
//             <h4>{shoe.name}</h4>
//             <span>Brand: {shoe.brand}</span>
//             <span>Size: {shoe.size}</span>
//             <span>Color: {shoe.color}</span>
//             <span>Price: ${shoe.price}</span>
//             <button>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoeList;

import React from 'react';

const ShoeList = () => {
  const shoes = [
    {
      id: 1,
      name: 'Nike Air Jordan 1 Mid',
      brand: 'Nike',
      color: 'Black/White',
      size: [9, 10, 11, 12],
      price: 120,
      image: 'https://example.com/images/shoe-1.jpg',
    },
    {
      id: 2,
      name: 'Adidas Stan Smith',
      brand: 'Adidas',
      color: 'White',
      size: [7, 8, 9, 10],
      price: 80,
      image: 'https://example.com/images/shoe-2.jpg',
    },
    {
      id: 3,
      name: 'New Balance 574',
      brand: 'New Balance',
      color: 'Grey',
      size: [8, 9, 10, 11],
      price: 90,
      image: 'https://example.com/images/shoe-3.jpg',
    },
    {
      id: 4,
      name: 'Converse Chuck Taylor All-Star',
      brand: 'Converse',
      color: 'Black',
      size: [6, 7, 8, 9, 10],
      price: 50,
      image: 'https://example.com/images/shoe-4.jpg',
    },
    {
      id: 5,
      name: 'Vans Old Skool',
      brand: 'Vans',
      color: 'Black/White',
      size: [8, 9, 10, 11],
      price: 70,
      image: 'https://example.com/images/shoe-5.jpg',
    },
    // Add more shoes here
  ];

  return (
    <div className="shoe-list-container">
      <h1>Step Up Your Style: Check Out Our Shoes</h1>
      {!shoes || shoes.length === 0 ? (
        <p>No shoes found. Add some to your collection!</p>
      ) : (
        <ul>
          {shoes.map((shoe) => (
            <li key={shoe.id} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} />
              <h4>{shoe.name}</h4>
              <span>Brand: {shoe.brand}</span>
              <span>Color: {shoe.color}</span>
              <span>Size: {shoe.size.join(', ')}</span>
              <span>Price: ${shoe.price}</span>
              <button>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoeList;
