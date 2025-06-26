const ProductoCaracteristicas = ({ caracteristicas }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white-800">Características principales</h3>
      <ul className="space-y-2">
        {caracteristicas.map((caracteristica, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white-700">{caracteristica}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoCaracteristicas;