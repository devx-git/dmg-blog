/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dmg-cms-backend.onrender.com'], // <--- ¡Añade el dominio de tu backend aquí!
  },
  // Opcional: Configuración para alias si usas @/
  // webpack(config) {
  //   config.resolve.alias['@'] = require('path').join(__dirname, 'src');
  //   return config;
  // },
};

export default nextConfig;



// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '1337',
//         pathname: '/uploads/**',
//       },
//     ],
//   },
// };

// export default nextConfig;