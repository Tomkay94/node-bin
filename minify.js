#!/usr/bin/env node

const
  fs      = require('fs')
  colours = require('colors')
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
    if (err) {
      console.log(filePath.blue.underline + ' minify unsuccessful'.red);
      throw err;
    };
    console.log(filePath.blue.underline + ' minified successfully to '.green + minFileName.blue.underline);
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
function addMinExtension(fileName) {
  var fileExtIndex = fileName.indexOf('.')
    , filePrefix   = fileName.slice(0, fileExtIndex)
    , fileExten    = fileName.slice(fileExtIndex, fileName.length)
    , minFileName  = filePrefix + '.min' + fileExten;

  return minFileName;
};
