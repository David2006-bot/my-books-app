import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // <--- Quité el "/serverless"

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});