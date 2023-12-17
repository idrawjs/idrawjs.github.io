import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iDraw.js',
  description: 'A simple JavaScript framework for Drawing on the web.',
  base: '/',
  srcDir: './src/',
  outDir: './docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: './assets/idraw.png'
    },
    i18nRouting: true,
    nav: [
      { text: 'Documents', link: 'https://idraw.js.org/docs/' },
      { text: 'Playground', link: 'https://idraw.js.org/playground/' }
    ], 
    socialLinks: [{ icon: 'github', link: 'https://github.com/idrawjs/idraw' }]
  },
   
});
