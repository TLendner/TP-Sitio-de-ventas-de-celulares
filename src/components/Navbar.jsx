import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/Js_data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="bg-orange-500 text-black font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              PP
            </div>
            <span className="text-2xl font-bold text-orange-500 hidden sm:block">
              Polshu<span className="text-white">Phones</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Inicio
            </NavLink>
            
            <NavLink 
              to="/productos" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Productos
            </NavLink>

            <NavLink 
              to="/quienes-somos" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Quiénes Somos
            </NavLink>

            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Contacto
            </NavLink>

          </div>

          {/* Menú Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-orange-500/20">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <NavLink 
              to="/" 
              className="block py-3 px-4 text-white hover:bg-orange-500/10 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            
            <div>
              <button 
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className="w-full text-left py-3 px-4 text-white hover:bg-orange-500/10 rounded-lg transition flex justify-between items-center"
              >
                <span>Productos</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isBrandsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isBrandsOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/productos" 
                    className="block py-2 px-4 text-white/80 hover:text-orange-400 rounded-lg transition"
                    onClick={() => {
                      setIsBrandsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Todos los productos
                  </Link>
                  {marcas.map(marca => (
                    <Link 
                      key={marca.id} 
                      to={`/productos/marca/${marca.id}`} 
                      className="block py-2 px-4 text-white/80 hover:text-orange-400 rounded-lg transition"
                      onClick={() => {
                        setIsBrandsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {marca.nombre}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink 
              to="/quienes-somos" 
              className="block py-3 px-4 text-white hover:bg-orange-500/10 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiénes Somos
            </NavLink>

            <NavLink 
              to="/contacto" 
              className="block py-3 px-4 text-white hover:bg-orange-500/10 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;