// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
components : [
    {
        path: '~/sub-module/components',
        extensions: ['.vue'],
    },
]
})
