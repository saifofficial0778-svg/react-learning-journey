import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card userName="Saif Sheikh" about="Software Engineer" img="https://images.unsplash.com/photo-1777973320577-7ea820fc57a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" />
       <Card userName="Aman Husain" about="DBMS Engineer" img="https://images.unsplash.com/photo-1773332611574-d73d8f5cea36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App