// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
      enabled: false
    },
    i18n: {
        defaultLocale: 'it',
        locales: ['it', 'en'],
        routing: {
            prefixDefaultLocale: true
        }
    },
    vite: {
    server: {
      allowedHosts: [
        'subdentated-lavelle-unprinted.ngrok-free.dev'
      ]
    }
  }
});
