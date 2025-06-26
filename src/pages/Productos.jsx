import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/Js_data';
import CardCelular from '../components/CardCelular';


const Productos = () => {
  const { idMarca } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let productosFiltrados = [...celulares];
      
      if (idMarca) {
        const marcaId = parseInt(idMarca);
        productosFiltrados = productosFiltrados.filter(p => p.marcaId === marcaId);
        const marca = marcas.find(m => m.id === marcaId);
        setMarcaSeleccionada(marca);
      } else {
        setMarcaSeleccionada(null);
      }
      
      setProductos(productosFiltrados);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [idMarca]);



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white-800">
          {marcaSeleccionada ? `Productos ${marcaSeleccionada.nombre}` : 'Todos los productos'}
        </h2>
        <div className="text-white-600">
          {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
        </div>
      </div>

      {productos.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-white-700 mb-2">No se encontraron productos</h3>
          <p className="text-white-500">Prueba con otra marca o visita nuestra tienda más tarde.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map(celular => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;