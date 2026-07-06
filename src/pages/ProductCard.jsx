// ProductCard.jsx
function ProductCard({ image, name, price }) {
  return (
    <div className="w-64 border border-gray-200 rounded-2xl p-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      {/* Product Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-40 object-cover rounded-xl"
      />
      
      {/* Product Name */}
      <h3 className="mt-4 mb-1 text-lg font-bold text-gray-800 tracking-tight">
        {name}
      </h3>
      
      {/* Product Price */}
      <p className="text-xl font-semibold text-emerald-600 mb-4">
        ₹{price.toLocaleString()}
      </p>
      
      {/* Buy Now Button */}
      <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;