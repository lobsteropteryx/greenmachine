module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
          continuous: {
            configFile: 'karma.conf.js',
            singleRun: true,
            browsers: ['PhantomJS']
          }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', 'karma:continuous');
};
