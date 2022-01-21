import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [data, setData] = useState({ lumber: [] });
  const API_URL = 'http://localhost:3000/lumber';
  const fetchData = async () => {
    const result = await axios(API_URL);
    setData(result.data[0]);
    console.log(result.data[0]);
    return result.data[0];
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>
            <p>
              {item.price} and {item.volume}
            </p>
          </li>
        ))} */}
        <p>
          {data.price} and {data.id}
        </p>
      </ul>
    </div>
  );
}

export default Header;
