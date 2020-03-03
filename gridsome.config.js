
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
    icon: './src/images/favicon.png',
    siteDescription: '',
    plugins: [
        {
            use: '@gridsome/source-wordpress',
            options: {
                baseUrl: 'https://www.metallawgroup.online/', // required
                typeName: 'WordPress', // GraphQL schema name (Optional)
                apiBase: 'wp-json',
                perPage: 100, // How many posts to load from server per request (Optional)
                concurrent: 10, // How many requests to run simultaneously (Optional)
                customEndpoints: [
                    {
                        name: "Employees",
                        typeName: "Employee",
                        route: "/wp/v2/posts?categories=251"
                    }
                ]
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

        config.mode('development')
    },
    templates: {
        Employee: '/employee/:acf__name',

        // WordPressPage: [
        //     {
        //         path: '/employee/:slug',
        //         component: './src/templates/Employee.vue',
        //     }
        // ],
        // WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
        // WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
        // WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)

    }
}
