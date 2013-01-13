module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      files: ['grunt.js', 'theme/source/neoskop-light.scss'],
      tasks: ['sass']
    },
    sass: {
      compile: {
        files: {
          'theme/neoskop-light.css': [
            'theme/template/mixins.scss', 
            'theme/template/settings.scss',
            'theme/source/neoskop-light.scss',
            'theme/template/theme.scss'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', 'sass');
};
