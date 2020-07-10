module.exports = {
    plugins: [
        require("postcss-preset-env")(),
        require("postcss-import")(),
        require("autoprefixer")(),
        ...process.env.HUGO_ENV === 'production'
            ? [require("@fullhuman/postcss-purgecss")({
                content: ['**/*.{md,html}'],
                defaultExtractor: content => {
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                    return broadMatches.concat(innerMatches)
                }
            })]
            : [],
        require("cssnano")({ preset: 'default' }),
    ]
};