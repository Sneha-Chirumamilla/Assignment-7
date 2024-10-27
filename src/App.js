import './App.css';
import Users from './Users';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const colors = ['#FFC107', '#8BC34A', '#FF5722', '#03A9F4', '#E91E63']; // Array of colors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((obj, index) => {
        const { name, username, email, phone, website } = obj;

        // Assign a background color based on the index
        const bgColor = colors[index % colors.length]; // Rotate through colors

        return (
          <Users
            key={obj.id}
            name={name}
            username={username}
            email={email}
            phone={phone}
            website={website}
            bgColor={bgColor}
          />
        );
      })}
    </div>
  );
}

export default App;
