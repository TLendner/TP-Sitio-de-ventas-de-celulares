import { Link } from 'react-router-dom';

const CardCelular = ({ celular }) => {
  return (
    <div className="card-product hover-glow animate-fade-in">
      <div className="relative h-48 bg-gray-800 flex items-center justify-center p-4 rounded-t-2xl overflow-hidden">
        <img 
          src={celular.fotos[0]} 
          alt={celular.nombre} 
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Imagen+no+disponible';
          }}
        />
        {celular.destacado && (
          <span className="absolute top-3 right-3 bg-primary text-dark text-xs font-bold px-2 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{celular.nombre}</h3>
        <p className="text-light/70 text-sm mb-3 line-clamp-2">{celular.descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">${celular.precio.toLocaleString()}</span>
          <Link 
            to={`/producto/${celular.id}`} 
            className="text-light hover:text-primary text-sm font-medium transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCelular;