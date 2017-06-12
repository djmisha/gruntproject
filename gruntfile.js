
module.exports = function(grunt) {

	grunt.initConfig ({

		pkg: grunt.file.readJSON('package.json'),	

		cssmin: {
			dist: {
				src:'css/*.css',
				dest: 'style.min.css'
			}
		},


		browserSync: {
 		  
 			bsFiles: {
    	   		src : ['css/*.css', '*.css']
   			},
  			
  			options: {
        	
        	server: {
            
            	baseDir: "./"
			    
			        }
			    }
			},

		watch: {
			files: ['css/*.css'],
			tasks: ['cssmin:dist', 'browserSync']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', [

		'cssmin:dist',		
		'watch'
		
		]);
}; 