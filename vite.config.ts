import {defineConfig} from "vite";
import * as path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig(function () {
    return {
        watch: true,
        mode: 'development',
        optimizeDeps: {
            include: ['prop-types'],
        },
        esbuild: {
            target: ['es2020', 'chrome60', 'edge18', 'firefox60', 'node12', 'safari11'],
        },

        build: {

            modulePreload: {polyfill: true},
            lib: {entry: path.resolve('.', './index.html')},
        },
        plugins: [

            react()
        ]

    }
})
