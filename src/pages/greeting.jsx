function Greeting({name,role}){
    return(
       <div style={{ border: '2px solid #007bff', padding: '10px', margin: '10px' }}>
      <h2>Hello, {name}! 👋</h2>
      <p>Welcome to the React World. Tera role hai: <strong>{role}</strong></p>
    </div>
  );
}
export default Greeting;