#!/usr/bin/env node

const
  fs      = require('fs')
  colours = require('colors')
  program = require('commander');

program
  .version('0.0.1')
  .description('A command line script to minify files.')
  .option('-f, --file <file>', 'Specify the file to minify.')
  .option('-e, --file-encode-type <encode-type>', 'Specify the encoding of the file being read.')
  .parse(process.argv);

if (program.fileEncodeType) {
  var encodeType = program.fileEncodeType;
}

if (program.file) {

  /* Determine the file encoding type, default to utf8. */
  var encodeType = (typeof encodeType === 'undefined')
    ? 'utf8'
    : encodeType

  /* Prepare the write contents */
  var filePath       = program.file
    , fileContent    = fs.readFileSync(filePath, encodeType)
    , minFileContent = minifyString(fileContent)
    , minFileName    = addMinExtension(filePath);

  writeMinifiedFile(minFileName, minFileContent, filePath);
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

function writeMinifiedFile(minFileName, minFileContent, filePath) {
  var minifiedFile = fs.writeFile(minFileName, minFileContent, function(err) {
    if (err) {
      console.log(filePath.blue.underline + ' minify unsuccessful'.red);
      throw err;
    };
    console.log(
      filePath.blue.underline +
      ' minified successfully to '.green +
      minFileName.blue.underline
    );
  });
};
