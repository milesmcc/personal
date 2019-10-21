import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import prerenderSpaPlugin from 'rollup-plugin-prerender-spa-plugin';

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: 'src/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'public/bundle.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: !production,
				// we'll extract any component CSS out into
				// a separate file  better for performance
				css: css => {
					css.write('public/bundle.css');
				},

				hydratable: true
			}),

			postcss({
			    extensions: [ '.css' ],
			}),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration 
			// consult the documentation for details:
			// https://github.com/rollup/rollup-plugin-commonjs
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),

			prerenderSpaPlugin({
				// Required - The path to the outputted app to prerender.
				staticDir: (process.cwd() + '/public'),
		   
				// Required - An array of routes to be passed to the prerenderer.
				routes: [ '/' ],
		   
				// Optional - Additional Puppeteer options.
				// https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
				puppeteer: {}
			}),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			!production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser(),
		],
		watch: {
			clearScreen: false
		}
	}
];
