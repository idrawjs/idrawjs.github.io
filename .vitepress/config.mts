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
      { text: 'Documents', link: 'https://idrawjs.com/docs/' },
      { text: 'Sponsor', link: 'https://idrawjs.com/docs/en-US/sponsor' },
      { text: 'Playground', link: 'https://idrawjs.com/playground/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/idrawjs/idraw' }]
  }
});
