import React from 'react';
import Greeting from './pages/greeting';
import Counter from './pages/counter';
import ProductCard from './pages/ProductCard';
import SimpleForm from './pages/Form';
import FruitList from './pages/Render';
import List from './pages/RenderWithKey';
import Filter from './pages/RenderWithFilterMap';
import SearchFilter from './pages/SearchBox';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
     
      {/* <Greeting name="saif" role="full stack dev"/> */}
      {/* <Counter/> */}
      {/* <SimpleForm/> */}
      <FruitList/>
      <List/>
      <Filter/>
      <SearchFilter/>
    </div>
  );
}

export default App;