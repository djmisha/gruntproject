
module.exports = function(grunt) {

	grunt.initConfig ({

		pkg: grunt.file.readJSON('package.json'),	

		min: {
			dist: {
				src:'css/*.css',
				dest: 'style.min.css'
			}
		},
		watch: {
			files: ['css/*.css'],
			tasks: ['min:dist']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', [
		'min:dist'
		]);
}; 