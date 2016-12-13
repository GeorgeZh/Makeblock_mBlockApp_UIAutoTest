module.exports = function(grunt){
	grunt.initConfig({
		clean:{
			coverage:{
				src:['mochawesome-reports/','results.txt']
			}
		},
		mochaTest:{
			test:{
				options:{
					reporter:'mochawesome',
					captureFile:'results.txt',
					quiet:false,
					clearRequireCache:false,
					ui:'bdd',
					timeout:5*60000
				},
				// 执行脚本路径
				src:['Test/Script/mBlockApp_test.js']
			}
		}
	});
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('default','mochaTest');
}