const esbuild = require('esbuild');
const copyPlugin = require('esbuild-plugin-copy');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { esbuildDecorators } = require('esbuild-decorators');

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
        }),
        esbuildDecorators()
    ]
};


esbuild.context(buildOptions).then(buildContext => {

    if (argv.serve) {
        console.log('Starting web server');
        buildContext.serve({
            servedir: 'dist',
        }).then(serverResult => {
            serverResult.hosts.forEach(host => {
                console.log(`Server is running on http://${host}:${serverResult.port}`);
            });

        }).catch(error => {
            console.error('Serve failed:', error);
            process.exit(1);
        });
    }

    if (argv.watch) {
        buildContext.watch().then(() => {
            console.log('Watching files for changes...');
            buildContext.rebuild();
        });

    }

    if (!argv.serve && !argv.watch) {
        console.log('Build succeeded');
        process.exit(0);
    }

}).catch(error => {
    console.error('Build failed:', error);
    process.exit(1);
});