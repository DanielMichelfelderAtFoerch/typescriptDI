const esbuild = require('esbuild');
const copyPlugin = require('esbuild-plugin-copy');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const chokidar = require('chokidar');

const argv = yargs(hideBin(process.argv))
    .option('watch', {
        alias: 'w',
        type: 'boolean',
        description: 'Watch files for changes'
    })
    .option('serve', {
        alias: 's',
        type: 'boolean',
        description: 'Start a web server'
    })
    .argv;

const buildOptions = {
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
};

const build = () => {
    esbuild.build(buildOptions).then(result => {
        console.log('Build succeeded:', result);
    }).catch(error => {
        console.error('Build failed:', error);
        process.exit(1);
    });
};

if (argv.watch) {
    console.log('Watching files for changes...');
    const watcher = chokidar.watch('src/**/*.{ts,html}', {
        persistent: true
    });

    watcher.on('change', path => {
        console.log(`File ${path} has been changed. Rebuilding...`);
        build();
    });

    build();
}

if (argv.serve) {
    esbuild.serve({
        servedir: 'dist',
    }, buildOptions).then(server => {
        console.log(`Server is running on http://${server.host}:${server.port}`);
    }).catch(error => {
        console.error('Serve failed:', error);
        process.exit(1);
    });
} else if (!argv.watch) {
    build();
}