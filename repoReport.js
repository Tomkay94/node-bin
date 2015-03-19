#!/usr/bin/env node

const
    fs  	        = require('fs')
 	, program				= require('commander')
  , child_process = require('child_process')

program
	.version('0.0.1')
	.description('A script to write a given repository\'s commit history to a file.')
	.option('-f, --file-name <file>', 'Specify the name of the commit log file.')
	.parse(process.argv);

if (program.fileName) {
	var commitFileName = program.fileName + '.iso.tsv.txt';
	createCommitLog(commitFileName);
	return;
};

/***************************************/
//         Helper Functions            //
/***************************************/

/* Write the commit log to a file.  */
function createCommitLog(commitFileName) {
  var getLog = "git log --date=iso --pretty=format:'%h%x09%an%x09%ad%x09%s'";
	child_process.exec(getLog, function(err, fileData) {
		fs.writeFile(commitFileName, fileData, function(err) {
			if (err) {
				throw err;
			};
			console.log("written successfully to" + commitFileName);
		});
	});
};
