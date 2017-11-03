#!/usr/bin/env node

/*
This is the entry point to the CLI
*/

var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');
var files = require('./assets/js/files');
var coinpouch = require('./assets/js/coinpouch');

//clear();



/*coinpouch.welcomeMessage(function(){
  console.log(arguments);
});
*/

coinpouch.initCoinpouch('ropsten')

var argv = require('minimist')(process.argv.slice(2));


/*  node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
   */

coinpouch.respondToConsoleArgs(argv)

/*if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}*/
