import {componentFolder} from './assets/js/helper';

require('dotenv').config();

let ModalComponents = componentFolder('./components/default/modals/');

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    base: '/nicko-dupli.github.io/'
} : {};

module.exports = {
    mode: 'universal',

    render: {
        http2: {
            push: true,
        }
    },

    env: {
        ModalComponents
    },

    watchers: {
        webpack: {
            poll: 1000
        }
    },

    /*
     ** Headers of the page
     */
    head: {
        title: 'МТС игры',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Игры МТС'
            }
        ],
        link: [
            // {rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico'} // favicon
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#ff0000'},

    /*
     ** Global CSS
     */
    css: [
        './assets/styles/vendors.scss',
        './assets/styles/main.scss'
    ],

    styleResources: {
        scss: '~/assets/styles/shared/*.scss'
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '~plugins/vueLazyload.js',
        },
        {
            src: '~plugins/modal.js',
        },
    ],

    router: {
        linkActiveClass: '_active-link',
        linkExactActiveClass: '_active-exact',
        ...routerBase,
    },

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources',
        '@nuxtjs/stylelint-module'
    ],

    buildModules: [
        '@nuxtjs/stylelint-module'
    ],

    stylelint: {
        files: ['**/*.scss', '**/*.vue'],
        failOnError: false,
        quiet: false
    },

    /*
     ** Build configuration
     */
    build: {
        publicPath: '/n/',

        babel: {
            plugins: [
                ['@babel/plugin-proposal-optional-chaining']
            ],
        },

        // analyze: true,

        /*
         ** You can extend webpack config here
         */
        terser: {
            terserOptions: {
                mangle: {
                    safari10: true
                }
            }
        },

        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }

            config.node = {
                fs: 'empty'
            };
        }
    }
};
