import React from 'react';
import Greeting from './pages/greeting';
import Counter from './pages/counter';
import TaskList from './pages/TaskList'
import AdvanceTaskList from './pages/AdvancedTaskList';
import AdmissionForm from './pages/AdmissionForm';
import WeatherApp from './pages/WeatherApp';
import DynamicUser from './pages/DynamicUser';
import UserProfile from './pages/UserProfile';
import ProductCard from './pages/ProductCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* <h1>🚀 React Logic Lab</h1>
      <Greeting name="Bhai" role="Frontend Developer"/>
      <Greeting name="Saif" role="Backend Developer"/>
      <Counter />
      <TaskList/>
      <AdvanceTaskList/> */}
      {/* <AdmissionForm/> */}
      {/* <WeatherApp/> */}
      {/* <DynamicUser/> */}
      {/* <UserProfile name="saif" city="bareilly"/> */}
      {/* <ExpenseDashboard/> */}
        <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Laptop */}
        <ProductCard 
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" 
          name="MacBook Air" 
          price={85000} 
        />

        {/* Card 2: Phone */}
        <ProductCard 
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" 
          name="iPhone 15" 
          price={79999} 
        />

        {/* Card 3: Watch */}
        <ProductCard 
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30" 
          name="Smart Watch" 
          price={4999} 
        />

      </div>
    </div>
      
      
    </div>
  );
}

export default App;