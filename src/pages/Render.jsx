function FruitList() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <div>
      <h3>My Fruit List:</h3>
      <ol>
        {/* .map() ka use karke har fruit ko <li> me convert kar rahe hain */}
        {fruits.map((fruit, index) => {
          return <li >{fruit}</li>;
        })}
      </ol>
    </div>
  );
}
export default FruitList