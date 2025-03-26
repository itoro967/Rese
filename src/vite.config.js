import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0', // Docker内で外部接続を許可
        port: 5173,
    },
    resolve: {
    alias: {
        "@": '/resources/js',
        img: '/resources/img',
    },
    },
});
