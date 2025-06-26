const Footer = () => {
  return (
    <footer className="bg-black text-light py-12 border-t border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary text-black font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-2">
                PP
              </div>
              <span className="text-2xl font-bold text-primary">
                Polshu<span className="text-light">Phones</span>
              </span>
            </div>
            <p className="text-light/70">
              Stanca & Aliados
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-light/70">
              <li><a href="/" className="hover:text-primary transition">Inicio</a></li>
              <li><a href="/productos" className="hover:text-primary transition">Productos</a></li>
              <li><a href="/quienes-somos" className="hover:text-primary transition">Nosotros</a></li>
              <li><a href="/contacto" className="hover:text-primary transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Marcas</h4>
            <ul className="space-y-2 text-light/70">
              <li><a href="/productos/marca/1" className="hover:text-primary transition">Apple</a></li>
              <li><a href="/productos/marca/2" className="hover:text-primary transition">Samsung</a></li>
              <li><a href="/productos/marca/3" className="hover:text-primary transition">Xiaomi</a></li>
              <li><a href="/productos/marca/4" className="hover:text-primary transition">Motorola</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <address className="not-italic text-light/70">
              <p className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. Siempreviva 724
              </p>
              <p className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +54 11 6755-0403
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@polshetta.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-orange-500/20 mt-12 pt-6 text-center text-light/50">
          <p>&copy; {new Date().getFullYear()} PolshuPhones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;