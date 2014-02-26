module.exports = {
    options: {
        banner: '<%= banner %>'
    },
    dist: {
        src: 'tmp/<%= package.name %>.browser.js',
        dest: 'dist/<%= package.name %>-<%= package.version %>.js'
    }
};