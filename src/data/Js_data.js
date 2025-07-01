export const marcas = [
  { id: 1, nombre: 'Apple', logo: '/apple-logo.png' },
  { id: 2, nombre: 'Samsung', logo: '/samsung-logo.png' },
  { id: 3, nombre: 'Xiaomi', logo: '/xiaomi-logo.png' },
  { id: 4, nombre: 'Motorola', logo: '/motorola-logo.png' },
  { id: 5, nombre: 'Google', logo: '/google-logo.png' },
  { id: 6, nombre: 'OnePlus', logo: '/oneplus-logo.png' }
];

export const celulares = [
  {
    id: 1,
    nombre: 'iPhone 15 Pro Max',
    descripcion: 'El iPhone más avanzado con pantalla Super Retina XDR, chip A17 Pro, cámara de 48 MP y diseño de titanio.',
    caracteristicas: [
      'Pantalla 6.7" Super Retina XDR',
      'Chip A17 Pro',
      'Cámara triple de 48MP + 12MP + 12MP',
      'Resistencia al agua IP68',
      'iOS 17'
    ],
    precio: 1299,
    marcaId: 1,
    fotos: [
      'img/iphone-15-pro-max-1.jpg',
      'img/iphone-15-pro-max-2.jpg',
      'img/iphone-15-pro-max-3.jpg'
    ],
    vendido: true
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S23 Ultra',
    descripcion: 'Potencia y versatilidad con pantalla Dynamic AMOLED 2X, Snapdragon 8 Gen 2 y cámara de 200MP.',
    caracteristicas: [
      'Pantalla 6.8" Dynamic AMOLED 2X',
      'Snapdragon 8 Gen 2',
      'Cámara de 200MP + 12MP + 10MP + 10MP',
      'S Pen incluido',
      'Android 13'
    ],
    precio: 1199,
    marcaId: 2,
    fotos: [
      '/galaxy-s23-ultra-1.jpg',
      '/galaxy-s23-ultra-2.jpg',
      '/galaxy-s23-ultra-3.jpg'
    ],
    vendido: true
  },
  {
    id: 3,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Excelencia fotográfica con colaboración Leica, pantalla AMOLED y carga ultrarrápida de 120W.',
    caracteristicas: [
      'Pantalla 6.73" AMOLED 120Hz',
      'Snapdragon 8 Gen 2',
      'Cámara Leica 50.3MP + 50MP + 50MP',
      'Carga 120W',
      'Android 13'
    ],
    precio: 999,
    marcaId: 3,
    fotos: [
      '/xiaomi-13-pro-1.jpg',
      '/xiaomi-13-pro-2.jpg',
      '/xiaomi-13-pro-3.jpg'
    ],
    vendido: true
  },
  {
    id: 4,
    nombre: 'Motorola Edge 40 Pro',
    descripcion: 'Diseño premium con pantalla pOLED, Snapdragon 8 Gen 2 y carga rápida de 125W.',
    caracteristicas: [
      'Pantalla 6.67" pOLED 165Hz',
      'Snapdragon 8 Gen 2',
      'Cámara triple 50MP + 50MP + 12MP',
      'Carga 125W',
      'Android 13'
    ],
    precio: 799,
    marcaId: 4,
    fotos: [
      '/motorola-edge-40-pro-1.jpg',
      '/motorola-edge-40-pro-2.jpg',
      '/motorola-edge-40-pro-3.jpg'
    ]
  },
  {
    id: 5,
    nombre: 'iPhone 14',
    descripcion: 'Potente y asequible con chip A15 Bionic, pantalla Super Retina XDR y gran duración de batería.',
    caracteristicas: [
      'Pantalla 6.1" Super Retina XDR',
      'Chip A15 Bionic',
      'Cámara dual 12MP + 12MP',
      'iOS 16',
      'Resistencia al agua IP68'
    ],
    precio: 799,
    marcaId: 1,
    fotos: [
      '/iphone-14-1.jpg',
      '/iphone-14-2.jpg',
      '/iphone-14-3.jpg'
    ]
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Z Fold 5',
    descripcion: 'Innovador smartphone plegable con pantalla principal de 7.6" y bisagras mejoradas.',
    caracteristicas: [
      'Pantalla interior 7.6" Dynamic AMOLED 2X',
      'Pantalla exterior 6.2"',
      'Snapdragon 8 Gen 2',
      'Cámara triple 50MP + 12MP + 10MP',
      'Android 13'
    ],
    precio: 1799,
    marcaId: 2,
    fotos: [
      '/galaxy-z-fold-5-1.jpg',
      '/galaxy-z-fold-5-2.jpg',
      '/galaxy-z-fold-5-3.jpg'
    ],
    vendido: true
  },
  {
    id: 7,
    nombre: 'Xiaomi Redmi Note 12 Pro+',
    descripcion: 'Rendimiento excepcional con pantalla AMOLED de 120Hz y cámara de 200MP.',
    caracteristicas: [
      'Pantalla 6.67" AMOLED 120Hz',
      'Dimensity 1080',
      'Cámara 200MP + 8MP + 2MP',
      'Carga 120W',
      'Android 12'
    ],
    precio: 399,
    marcaId: 3,
    fotos: [
      '/redmi-note-12-pro-plus-1.jpg',
      '/redmi-note-12-pro-plus-2.jpg',
      '/redmi-note-12-pro-plus-3.jpg'
    ]
  },
  {
    id: 8,
    nombre: 'Motorola Razr 40 Ultra',
    descripcion: 'Clásico reinventado con diseño plegable y pantalla externa de 3.6".',
    caracteristicas: [
      'Pantalla plegable 6.9" pOLED 165Hz',
      'Pantalla externa 3.6"',
      'Snapdragon 8+ Gen 1',
      'Cámara dual 12MP + 13MP',
      'Android 13'
    ],
    precio: 999,
    marcaId: 4,
    fotos: [
      '/motorola-razr-40-ultra-1.jpg',
      '/motorola-razr-40-ultra-2.jpg',
      '/motorola-razr-40-ultra-3.jpg'
    ],
    vendido: true
  },
  {
    id: 9,
    nombre: 'Google Pixel 8 Pro',
    descripcion: 'Inteligencia artificial avanzada con cámara mejorada por Google Tensor G3.',
    caracteristicas: [
      'Pantalla 6.7" LTPO OLED 120Hz',
      'Google Tensor G3',
      'Cámara triple 50MP + 48MP + 48MP',
      'Android 14',
      'IA avanzada para fotos'
    ],
    precio: 999,
    marcaId: 5,
    fotos: [
      '/pixel-8-pro-1.jpg',
      '/pixel-8-pro-2.jpg',
      '/pixel-8-pro-3.jpg'
    ],
    vendido: true
  },
  {
    id: 10,
    nombre: 'OnePlus 11 5G',
    descripcion: 'Rendimiento impecable con Snapdragon 8 Gen 2 y carga rápida de 100W.',
    caracteristicas: [
      'Pantalla 6.7" AMOLED 120Hz',
      'Snapdragon 8 Gen 2',
      'Cámara triple 50MP + 48MP + 32MP',
      'Carga 100W',
      'Android 13'
    ],
    precio: 699,
    marcaId: 6,
    fotos: [
      '/oneplus-11-1.jpg',
      '/oneplus-11-2.jpg',
      '/oneplus-11-3.jpg'
    ]
  }
];