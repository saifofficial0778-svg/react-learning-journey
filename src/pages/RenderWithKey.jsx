// Example: Items ko unique id ke sath render karna
function List(){
const todoList = [
  { id: 'a1', task: 'Learn React' },
  { id: 'b2', task: 'Practice Maps' },
  { id: 'c3', task: 'Build Project' }
];

return (
  <ul>
    {todoList.map((item) => (
      // Yahan humne har item ko uski unique ID as a key de di
      <li key={item.id}>{item.task}</li>
    ))}
  </ul>
);
}

export default List