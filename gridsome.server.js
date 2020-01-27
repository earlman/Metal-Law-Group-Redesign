const fs = require('fs')

module.exports = {
    afterBuild({ redirects }) {
        for (const rule of redirects) {
            // rule.from   - The dynamic path
            // rule.to     - The HTML file path
            // rule.status - 200 if rewrite rule
            if (rule.status === 404) {
                rule.to === "/index.html"
            }
        }
    }
}