import { useEffect, useState } from 'react';
import CardCelular from '../components/CardCelular';
import { celulares } from '../data/Js_data';

const Home = () => {
  const [destacados, setDestacados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      const destacados = celulares.filter(celular => celular.vendido);
      setDestacados(destacados);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className="container mx-auto px-4 py-8">

      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl p-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Los mejores smartphones del mercado</h1>
          <p className="text-xl mb-6">Descubre nuestra selección premium de dispositivos con las últimas tecnologías.</p>
          <a 
            href="/productos" 
            className="inline-block bg-white text-orange-400 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
          >
            Ver catálogo
          </a>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white-800">Productos más vendidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destacados.map(celular => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;