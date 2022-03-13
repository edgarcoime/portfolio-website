import adapter from '@sveltejs/adapter-auto';
// import adapter from "@sveltejs/adapter-node";
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess({})],
    // vite: {
    //     resolve: {
    //         alias: {
    //             "$components": path.resolve("./src/components"),
    //             "$lib": path.resolve("./src/lib"),
    //         }
    //     }
    // },
    kit: {
        adapter: adapter(),
        // adapter: adapter({ out: 'build' }),
    }
};

export default config;