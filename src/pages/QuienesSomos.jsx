import { useState, useEffect } from 'react';

const QuienesSomos = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-500">
            Nuestra <span className="text-white">Historia</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-opacity duration-500 delay-100 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute -inset-4 border-2 border-orange-500/30 rounded-xl rotate-3"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
              <div className="w-full h-64 md:h-96 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Equipo PolshuPhones</span>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-opacity duration-500 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-orange-500">Innovación desde 2008</h2>
              <p className="text-gray-300 leading-relaxed">
                En PolshuPhones hemos revolucionado el mercado de dispositivos móviles con un enfoque único que combina tecnología de punta con diseño vanguardista.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Nuestra Filosofía</h3>
              <p className="text-gray-300 leading-relaxed">
                Creemos que la tecnología debe ser accesible, emocionante y personal. Cada dispositivo que vendemos pasa por un riguroso proceso de selección para garantizar excelencia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold mb-2">+15,000</h4>
                <p className="text-sm text-gray-400">Clientes satisfechos</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold mb-2">100%</h4>
                <p className="text-sm text-gray-400">Productos originales</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-24 bg-gradient-to-r from-orange-500/10 to-transparent p-8 rounded-xl border border-orange-500/20 transition-opacity duration-500 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-6 text-orange-500">El Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Stanca", role: "Fundador & CEO", bio: "Visionario tecnológico con más de 15 años en el sector." },
              { name: "María Aliados", role: "Directora de Diseño", bio: "Especialista en experiencia de usuario y diseño de interfaces." },
              { name: "Luis Polshetta", role: "CTO", bio: "Experto en hardware y desarrollo de sistemas móviles." }
            ].map((member, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all group">
                <div className="w-16 h-16 bg-orange-500 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-black group-hover:rotate-12 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;