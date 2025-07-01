import { useState, useEffect } from 'react';

const Contacto = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'nombre':
        if (!value.trim()) error = 'El nombre es requerido';
        else if (value.length < 3) error = 'Mínimo 3 caracteres';
        break;
      case 'email':
        if (!value.trim()) error = 'El email es requerido';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email inválido';
        break;
      case 'telefono':
        if (value && !/^[0-9+-\s]+$/.test(value)) error = 'Teléfono inválido';
        break;
      case 'mensaje':
        if (!value.trim()) error = 'El mensaje es requerido';
        else if (value.length < 10) error = 'Mínimo 10 caracteres';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      if (key !== 'telefono') {
        const fieldValid = validateField(key, formData[key]);
        if (!fieldValid) isValid = false;
      }
    });
    
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
      }, 1500);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`mb-16 text-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-500">
            Contáct<span className="text-white">anos</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tenés preguntas? Escribinos y Polshetta te responde al toque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-opacity duration-500 delay-100 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all">
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Información</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-gray-400">Av. Siempreviva 724, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-gray-400">+54 11 6755-0403</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-400">contacto@polshetta.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all">
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Horarios</h2>
              <div className="space-y-4">
                {[
                  { day: 'Lunes a Viernes', hours: '9:00 - 18:00' },
                  { day: 'Sábados', hours: '10:00 - 14:00' },
                  { day: 'Domingos', hours: 'Cerrado' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-800 pb-3">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-opacity duration-500 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all">
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Formulario</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-900/50 text-green-400 rounded-lg border border-green-500/30">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block mb-2 font-medium">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 ${errors.nombre ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-orange-500 border-gray-700'}`}
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-orange-500 border-gray-700'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="telefono" className="block mb-2 font-medium">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 ${errors.telefono ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-orange-500 border-gray-700'}`}
                  />
                  {errors.telefono && <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block mb-2 font-medium">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 ${errors.mensaje ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-orange-500 border-gray-700'}`}
                  ></textarea>
                  {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${isSubmitting ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;