import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/');
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Essa é a resposta da API: {message}</h1>
    </div>
  );
}

export default App;