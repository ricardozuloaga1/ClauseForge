import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({build:{rollupOptions:{input:Object.fromEntries(['product','index','app','editor','assistant'].map(n=>[n,resolve(n+'.html')]))}},server:{strictPort:true}});
