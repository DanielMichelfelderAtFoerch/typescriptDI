const esbuild = require('esbuild');
const copyPlugin = require('esbuild-plugin-copy');

esbuild.build({
    entryPoints: ['src/main.ts'],
    outfile: 'dist/bundle.js',
    bundle: true,
    target: 'es2022',
    platform: 'browser',
    format: 'esm', // Explizit als ESModule ausgeben
    plugins: [
        copyPlugin.copy({
            assets: {
                from: ['./src/**/*.html'],
                to: ['./'],
            },
        })
    ]
}).catch(() => process.exit(1));