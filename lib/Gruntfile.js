module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: ['../javascripts/main.js'],
				dest: '../dist/app.js'
			}
		},
		sass: {
			dist: {
				files: {
					'../css/main.css': '../sass/main.scss'
				}
			}
		},
		watch: {
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['browserify']
			},
			sass: {
				files: ['../sass/**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['sass', 'browserify', 'watch']);
};