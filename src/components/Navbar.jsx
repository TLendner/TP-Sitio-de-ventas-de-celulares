import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-black border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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

          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-700' : ''}`
              }
            >
              Inicio
            </NavLink>
            
            <NavLink 
              to="/productos" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-700' : ''}`
              }
            >
              Productos
            </NavLink>

            <NavLink 
              to="/quienes-somos" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-700' : ''}`
              }
            >
              Quiénes Somos
            </NavLink>

            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `text-white hover:text-orange-400 transition-colors font-medium ${isActive ? 'text-orange-700' : ''}`
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