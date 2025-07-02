export const marcas = [
  { id: 1, nombre: 'Apple', },
  { id: 2, nombre: 'Samsung', },
  { id: 3, nombre: 'Xiaomi', },
  { id: 4, nombre: 'Motorola', },
  { id: 5, nombre: 'Google', },
  { id: 6, nombre: 'OnePlus', }
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
      'https://galaxcell.com/wp-content/uploads/2024/07/iphone-15-pro-max-azul-titanio-vista-frontal-y-trasera.webp',
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
      'https://media.flixcar.com/webp/synd-asset/Samsung-116410186-ar-galaxy-s23-s918-446703-sm-s918bzgvaro-535074951--Download-Source--zoom.png',
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
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1678361301.0778978.png',
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
      'https://storage.comprasmartphone.com/smartphones/motorola-edge-40-pro.png'
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
      'https://pladani.com/wp-content/uploads/2024/11/iphone-14-pro-max.webp',
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
      'https://media.flixcar.com/webp/synd-asset/Samsung-124868604-ar-galaxy-z-fold5-f946-sm-f946blblaro-537220514--Download-Source--zoom.png',
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
      'https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fsmartphones%2Fxiaomi-redmi-note-12-pro.png&w=640&q=75',
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
      'https://motoecuador.vtexassets.com/arquivos/ids/156522/168206-1200-auto.png?v=638440447425970000',
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
      'https://storage.comprasmartphone.com/smartphones/google-pixel-8-pro.png',
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
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/in/product/11/marble.png',
    ]
  }
];