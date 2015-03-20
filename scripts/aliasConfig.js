#!/usr/bin/env node

const
    fs            = require('fs')
  , program       = require('commander')
  , child_process = require('child_process');

program
  .version('0.0.1')
  .description('A script to configure Bash aliases through the terminal.')
  .option('-a, --add-alias <alias>', 'Specify the name of the alias you want to add.')
  .option('-m, --map-alias <command>', 'Specify the script for the alias')
  .parse(process.argv);

if (program.addAlias && program.mapAlias) {
  var alias = 'alias ' + program.addAlias + '=\"' + program.mapAlias + '\"\n'
    , user  = getLinuxUser();
  addAliasToFile(alias, user);
};

/***************************************/
//         Helper Functions            //
/***************************************/

/* Adds the alias to ~/.bash_aliases. */
function addAliasToFile(alias, user) {

  var bashAliasesPath = '/home/' + user + '/.bash_aliases';
  fs.appendFile(bashAliasesPath, alias, function(err) {
    if (err) {
      console.log('The alias was not created successfully.');
      throw err;
    };
    child_process.execSync('. ' + bashAliasesPath);
    console.log('Alias: ' + program.addAlias + ' mapped to: ' + program.mapAlias);
  });
};

/* Retrieves the name of the current Linux user */
function getLinuxUser() {
  var data = child_process.execSync('whoami');
  return (data.toString('utf8').split('\n')[0]);
};
