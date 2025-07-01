import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { celulares, marcas } from '../data/Js_data';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [filtros, setFiltros] = useState({
    precioMin: '',
    precioMax: '',
    caracteristicas: {
      resistenteAgua: false,
      cargaRapida: false,
      camaraPro: false
    },
    orden: 'relevancia'
  });
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let productosFiltrados = [...celulares];
      
      // Filtro por marca
      if (idMarca) {
        const marcaId = parseInt(idMarca);
        productosFiltrados = productosFiltrados.filter(p => p.marcaId === marcaId);
        const marca = marcas.find(m => m.id === marcaId);
        setMarcaSeleccionada(marca);
      } else {
        setMarcaSeleccionada(null);
      }
      
      // Aplicar filtros adicionales
      productosFiltrados = aplicarFiltrosAdicionales(productosFiltrados);
      
      // Ordenar productos
      productosFiltrados = ordenarProductos(productosFiltrados);
      
      setProductos(productosFiltrados);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [idMarca, filtros]);

  const aplicarFiltrosAdicionales = (productos) => {
    return productos.filter(producto => {
      // Filtro por precio
      if (filtros.precioMin && producto.precio < Number(filtros.precioMin)) return false;
      if (filtros.precioMax && producto.precio > Number(filtros.precioMax)) return false;
      
      // Filtro por características (simulado)
      const descLower = producto.descripcion.toLowerCase();
      if (filtros.caracteristicas.resistenteAgua && !descLower.includes('resistente')) return false;
      if (filtros.caracteristicas.cargaRapida && !descLower.includes('carga rápida') && !descLower.includes('carga rapida')) return false;
      if (filtros.caracteristicas.camaraPro && !descLower.includes('cámara pro') && !descLower.includes('camara pro')) return false;
      
      return true;
    });
  };

  const ordenarProductos = (productos) => {
    switch (filtros.orden) {
      case 'precio-asc':
        return [...productos].sort((a, b) => a.precio - b.precio);
      case 'precio-desc':
        return [...productos].sort((a, b) => b.precio - a.precio);
      case 'nombre-asc':
        return [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
      case 'nombre-desc':
        return [...productos].sort((a, b) => b.nombre.localeCompare(a.nombre));
      default:
        return productos; // relevancia (orden original)
    }
  };

  const handleFiltroChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFiltros(prev => ({
        ...prev,
        caracteristicas: {
          ...prev.caracteristicas,
          [name]: checked
        }
      }));
    } else {
      setFiltros(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetFiltros = () => {
    setFiltros({
      precioMin: '',
      precioMax: '',
      caracteristicas: {
        resistenteAgua: false,
        cargaRapida: false,
        camaraPro: false
      },
      orden: 'relevancia'
    });
  };

  const handleMarcaChange = (e) => {
    const marcaId = e.target.value;
    if (marcaId === 'todas') {
      navigate('/productos');
    } else {
      navigate(`/productos/marca/${marcaId}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-white">
          {marcaSeleccionada ? `Productos ${marcaSeleccionada.nombre}` : 'Todos los productos'}
        </h2>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="text-white-600 flex-1 text-right md:text-left">
            {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
          </div>
          
          <button 
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {mostrarFiltros ? 'Ocultar filtros' : 'Mostrar filtros'}
          </button>
        </div>
      </div>

      {mostrarFiltros && (
        <div className="bg-gray-900/50 p-6 rounded-xl border border-orange-500/20 mb-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Selector de marca */}
            <div>
              <label className="block text-white mb-2">Marca</label>
              <select
                value={idMarca || 'todas'}
                onChange={handleMarcaChange}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="todas">Todas las marcas</option>
                {marcas.map(marca => (
                  <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                ))}
              </select>
            </div>
            
            {/* Rango de precios */}
            <div>
              <label className="block text-white mb-2">Rango de precio</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Mínimo"
                  name="precioMin"
                  value={filtros.precioMin}
                  onChange={handleFiltroChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <input
                  type="number"
                  placeholder="Máximo"
                  name="precioMax"
                  value={filtros.precioMax}
                  onChange={handleFiltroChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            
            {/* Ordenar por */}
            <div>
              <label className="block text-white mb-2">Ordenar por</label>
              <select
                name="orden"
                value={filtros.orden}
                onChange={handleFiltroChange}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
                <option value="nombre-asc">Nombre: A-Z</option>
                <option value="nombre-desc">Nombre: Z-A</option>
              </select>
            </div>
            
            {/* Botón reset */}
            <div className="flex items-end">
              <button
                onClick={resetFiltros}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
            </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : productos.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-orange-500/20 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">No se encontraron productos</h3>
            <p className="text-gray-400 mb-6">Prueba ajustando los filtros o visita nuestra tienda más tarde.</p>
            <button
              onClick={resetFiltros}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reiniciar filtros
            </button>
          </div>
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