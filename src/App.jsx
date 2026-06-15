import React from 'react';
import Greeting from './pages/greeting';
import Counter from './pages/counter';
import TaskList from './pages/TaskList'
import AdvanceTaskList from './pages/AdvancedTaskList';
import AdmissionForm from './pages/AdmissionForm';
import WeatherApp from './pages/WeatherApp';
import DynamicUser from './pages/DynamicUser';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🚀 React Logic Lab</h1>
      {/* <Greeting name="Bhai" role="Frontend Developer"/>
      <Greeting name="Saif" role="Backend Developer"/>
      <Counter />
      <TaskList/>
      <AdvanceTaskList/> */}
      {/* <AdmissionForm/> */}
      {/* <WeatherApp/> */}
      <DynamicUser/>
    </div>
  );
}

export default App;