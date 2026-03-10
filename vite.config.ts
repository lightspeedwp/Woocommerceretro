
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'sonner@2.0.3': 'sonner',
        'react-hook-form@7.55.0': 'react-hook-form',
        'figma:asset/f199cc33707917c80c8a487f018e4be0adaa2d5d.png': path.resolve(__dirname, './src/assets/f199cc33707917c80c8a487f018e4be0adaa2d5d.png'),
        'figma:asset/ee839a047d450a2ce771b7926d5e5889e7888df3.png': path.resolve(__dirname, './src/assets/ee839a047d450a2ce771b7926d5e5889e7888df3.png'),
        'figma:asset/edfc144193a7ca77fcaff925c3487eef2d654a16.png': path.resolve(__dirname, './src/assets/edfc144193a7ca77fcaff925c3487eef2d654a16.png'),
        'figma:asset/cb1c2316ea963ac435991723bd90223cbbbfdafd.png': path.resolve(__dirname, './src/assets/cb1c2316ea963ac435991723bd90223cbbbfdafd.png'),
        'figma:asset/996e718b426fcecb721c3c7d66aaec12ee9335d5.png': path.resolve(__dirname, './src/assets/996e718b426fcecb721c3c7d66aaec12ee9335d5.png'),
        'figma:asset/7b2aa8564892e85b5342acacc9d805453d5e2c4f.png': path.resolve(__dirname, './src/assets/7b2aa8564892e85b5342acacc9d805453d5e2c4f.png'),
        'figma:asset/6fdbb17bf2a07622279591ffb50fad6cbfb4e643.png': path.resolve(__dirname, './src/assets/6fdbb17bf2a07622279591ffb50fad6cbfb4e643.png'),
        'figma:asset/470003b61376079559f130275bb01311bacd79af.png': path.resolve(__dirname, './src/assets/470003b61376079559f130275bb01311bacd79af.png'),
        'figma:asset/3cf3079aa7682081e360674f3b9f5574a320c9a7.png': path.resolve(__dirname, './src/assets/3cf3079aa7682081e360674f3b9f5574a320c9a7.png'),
        'figma:asset/1a333eaffeda9dbd7961fc6d27659777ef0ecc28.png': path.resolve(__dirname, './src/assets/1a333eaffeda9dbd7961fc6d27659777ef0ecc28.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });