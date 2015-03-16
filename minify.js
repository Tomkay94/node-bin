#!/usr/bin/env node

const
  fs      = require('fs')
  program = require('commander');

program
  .version('0.0.1')
  .description('A command line script to minify files.')
  .option('-f, --file <file>', 'Specify the file to minify: minify -f thisFile.js')
  .parse(process.argv);

if (program.file) {
  /* Read the file into a string */
  var filePath       = program.file
    , fileContent    = fs.readFileSync(filePath, 'utf8')
    , minFileContent = minifyString(fileContent)
    , minFileName    = addMinExtension(filePath);

  var minifiedFile = fs.writeFile(minFileName, minFileContent, function(err) {
    if (err) { throw err; };
    console.log('-- ' + filePath + ' minified to ' + minFileName + ' --');
  });
};

/***************************************/
//         Helper Functions            //
/***************************************/

/* Remove all white space from str. */
function minifyString(str) {
  return str.replace(/\s/g, '');
};

/* Insert .min extension to FileName. */
function addMinExtension(FileName) {
  var fileExtIndex = FileName.indexOf('.')
    , filePrefix   = FileName.slice(0, fileExtIndex)
    , fileExten    = FileName.slice(fileExtIndex, FileName.length)
    , minFileName  = filePrefix + '.min' + fileExten;

  return minFileName;
};
