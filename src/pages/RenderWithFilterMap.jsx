function Filter(){
    const products = [
  { id: 1, name: 'T-Shirt', price: 400 },
  { id: 2, name: 'Shoes', price: 1200 },
  { id: 3, name: 'Watch', price: 2500 },
  { id: 4, name: 'Cap', price: 200 }
];

return(
    <div>
        <h3>Premium Products (Price {'>'} 500):</h3>
        <ul>
        {products
        .filter((item)=>item.price>500)

        .map((filterdItem)=>{
            return <li key={filterdItem.id}>{filterdItem.name}- {filterdItem.price}</li>
        })
        }
        </ul>
    </div>
)
}
export default Filter