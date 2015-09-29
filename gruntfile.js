module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    jade: {
      compile: {
        "src": ["views/*.jade"],
        "dest": "public/",
        "ext": ".html",
        "expand": true,
        "options": {
          "pretty": true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/styles/style.css' : 'sass/*.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/*.scss', 'views/*.jade', 'views/includes/*.jade'],
        tasks: ['sass', 'jade'],
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass', 'grunt-jade', 'grunt-contrib-watch');
  grunt.registerTask('default', 'just watch' ['sass'], ['jade'], ['watch']);
};
