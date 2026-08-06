import React from 'react'

function App() {

  return (
    <>
    <div onWheel={(e)=>{
      if (e.deltaY > 0) {
        console.log('scrolling down')
      }else{
        console.log('scrolling up')
      }
    }} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <div className="h-dvh w-full bg-red-500"></div>
      <div className="h-dvh w-full bg-blue-500"></div>
      <div className="h-dvh w-full bg-green-500"></div>
    </div>
  </>
)}

export default App