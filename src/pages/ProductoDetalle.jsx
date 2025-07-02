import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/Js_data';
import ProductoCaracteristicas from '../components/ProductoCaracteristicas';
import CardCelular from '../components/CardCelular';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [celular, setCelular] = useState(null);
  const [marca, setMarca] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const productId = Number(id);

    const producto = celulares.find(p => Number(p.id) === productId);
    
    if (producto) {
      setCelular(producto);
      setImagenPrincipal(producto.fotos[0] || 'https://via.placeholder.com/600x600?text=Imagen+no+disponible');
      
      const marcaProducto = marcas.find(m => Number(m.id) === Number(producto.marcaId));
      setMarca(marcaProducto);
    }
    
    setLoading(false);
  }, [id]);



  if (!celular) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-white-800 mb-4">Producto no encontrado</h2>
        <p className="text-white-600">No existe un producto con el ID: {id}</p>
        <p className="text-sm text-gray-500 mt-2">
          IDs disponibles: {celulares.map(p => p.id).join(', ')}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <div className="h-96 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <img 
                src={imagenPrincipal} 
                alt={celular.nombre} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Imagen+no+disponible';
                }}
              />
            </div>
          </div>
          
          <div className="md:w-1/2 p-6">
            <div className="flex items-center mb-2">
              {marca && (
                <img 
                  src={marca.logo || 'https://via.placeholder.com/100x40?text=Marca'} 
                  alt={marca.nombre} 
                  className="h-8 mr-3"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x40?text=Marca';
                  }}
                />
              )}
              <span className="text-white-500">{marca?.nombre || 'Marca desconocida'}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-white-800 mb-4">{celular.nombre}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(24 reseñas)</span>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-orange-600">${celular.precio.toLocaleString()}</span>
              {celular.precio > 800 && (
                <span className="ml-2 text-green-500 font-medium">12 cuotas sin interés</span>
              )}
            </div>
            
            <p className="text-white-700 mb-8">{celular.descripcion}</p>
            
            <div className="mb-8">
              <ProductoCaracteristicas caracteristicas={celular.caracteristicas || []} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition flex-1">
                Comprar ahora
              </button>
              <button className="border border-orange-400 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition flex-1">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {celular.marcaId && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white-800 mb-6">Productos relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {celulares
              .filter(p => Number(p.marcaId) === Number(celular.marcaId) && Number(p.id) !== Number(celular.id))
              .slice(0, 3)
              .map(relacionado => (
                <CardCelular key={relacionado.id} celular={relacionado} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoDetalle;