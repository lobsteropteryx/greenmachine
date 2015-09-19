module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            single: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                options: {
                    module: 'amd', //or commonjs 
                    target: 'es5', //or es3 
                    basePath: '',
                    sourceMap: true,
                    declaration: false,
                    noImplicitAny: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-typescript');
    
    grunt.registerTask('default', ['typescript', 'karma:single']);
};
