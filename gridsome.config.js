
const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/index.sass'),

            ],
        })
}

module.exports = {
    siteName: 'Metal Law Group',
    siteDescription: '',
    plugins: [
        {
            use: '@gridsome/source-wordpress',
            options: {
                baseUrl: 'https://www.metallawgroup.com', // required
                typeName: 'WordPress', // GraphQL schema name (Optional)
                apiBase: 'wp-json',
                perPage: 100, // How many posts to load from server per request (Optional)
                concurrent: 10, // How many requests to run simultaneously (Optional)

            }
        }
    ],
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('sass').oneOf(type))
        })

        // or if you use scss
        // types.forEach(type => {
        //     addStyleResource(config.module.rule('scss').oneOf(type))
        // })
    },
    templates: {
        // WordPressPage: '/employee/:slug',

        WordPressPage: [
            {
                path: '/employee/:slug',
                component: './src/templates/Employee.vue',
            }
        ],
        WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
        WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
        WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)

    }
}
