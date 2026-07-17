import React from 'react';
import Greeting from './pages/greeting';
import Counter from './pages/counter';
import ProductCard from './pages/ProductCard';
import SimpleForm from './pages/Form';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
     
      {/* <Greeting name="saif" role="full stack dev"/> */}
      {/* <Counter/> */}
      <SimpleForm/>
    </div>
  );
}

export default App;