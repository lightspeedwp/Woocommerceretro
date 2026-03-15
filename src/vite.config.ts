import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Disable Fast Refresh for Figma Make compatibility
      fastRefresh: false,
      devTarget: mode === 'development' ? 'esnext' : undefined,
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Package version aliases (only for packages actually used with inline versions)
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'input-otp@1.4.2': 'input-otp',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      
      // Project path aliases
      '@': path.resolve(__dirname, './src/app'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/components': path.resolve(__dirname, './src/app/components'),
      '@/templates': path.resolve(__dirname, './src/app/components/templates'),
      '@/contexts': path.resolve(__dirname, './src/app/contexts'),
      '@/hooks': path.resolve(__dirname, './src/app/hooks'),
      '@/data': path.resolve(__dirname, './src/app/data'),
      '@/utils': path.resolve(__dirname, './src/app/utils'),
      '@/types': path.resolve(__dirname, './src/app/types'),
      '@/constants': path.resolve(__dirname, './src/app/constants'),
      '@/services': path.resolve(__dirname, './src/app/services'),
      '@/pages': path.resolve(__dirname, './src/app/components/pages'),
      '@/imports': path.resolve(__dirname, './src/app/imports'),
    },
  },
  define: {
    // Ensure production mode is properly detected
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
    // Ensure all assets are bundled correctly for Figma Make
    rollupOptions: {
      output: {
        // Single bundle for Figma Make compatibility
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
    ],
  },
}));