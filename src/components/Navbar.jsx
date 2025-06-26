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
          </div>    
          </div>
    </nav>
  );
};

export default Navbar;