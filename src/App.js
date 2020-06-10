import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {        
        const response = await axios.get('test');

        console.log(response);
      }
      catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      Hello!
    </div>
  );
};

export default App;
