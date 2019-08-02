
const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/index.sass'),
                // or if you use scss
                // path.resolve(__dirname, './src/assets/sass/_globals.scss'),
                // you can also use a glob if you'd prefer
                // path.resolve(__dirname, './src/assets/sass/*.sass'),
                // or scss
                // path.resolve(__dirname, './src/assets/sass/*.scss'),
            ],
        })
}

module.exports = {
    siteName: 'Gridsome',
    siteDescription: 'A WordPress starter for Gridsome',
    plugins: [
        {
            use: '@gridsome/source-wordpress',
            options: {
                baseUrl: 'https://www.metallawgroup.com', // required
                typeName: 'WordPress', // GraphQL schema name (Optional)
                perPage: 100, // How many posts to load from server per request (Optional)
                concurrent: 10, // How many requests to run simultaneously (Optional)
                routes: {
                    post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
                    post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
                }
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
    }
}
