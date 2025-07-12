import React, { useEffect, useState } from 'react';
import API from '../api';

function StoreDashboard() {
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("stores/1/").then(res => {
      setStore(res.data);
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      <h2>My Store: {store?.name}</h2>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} - ₹{prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoreDashboard;
