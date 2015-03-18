#!/usr/bin/env node

const
	  child_process = require('child_process')
	, fs  	        = require('fs');

(function main() {
	var commitFileName = process.argv[2] + '.iso.tsv.txt';

	child_process.exec("git log --date=iso --pretty=format:'%h%x09%an%x09%ad%x09%s'", function(err, fileData) {

		fs.writeFile(commitFileName, fileData, function(err) {
			if (err) { throw err; };
			console.log("written successfully to" + commitFileName);
		});

	});
})();
