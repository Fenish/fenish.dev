// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	eslint: {
		checker: true,
		config: {
			stylistic: {
				semi: true,
				indent: 'tab',

			},
		},
	},
	tailwindcss: {
		cssPath: false,
		exposeConfig: true,
	},
});
