const
  fs = require('fs');

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

/* Removes white space from file and
   writes new minified file. */
(function main() {

  /* Read the file into a string */
  var filePath       = process.argv[2]
    , fileContent    = fs.readFileSync(filePath, 'utf8')
    , minFileContent = minifyString(fileContent)
    , minFileName    = addMinExtension(filePath);

  var minifiedFile = fs.writeFile(minFileName, minFileContent, function(err) {
    if (err) { throw err; };
    console.log('-- ' + filePath + ' minified to ' + minFileName + ' --');
  });
})();
