
var inquirer    = require('inquirer');
var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var accountController      = require('./accountController');


const GITHUB_URL = "https://www.github.com/admazzola/coinpouch";

module.exports = {


respondToConsoleArgs(argv)
{
  let anonymous_args = argv['_'];
  let primary_anonymous_arg = anonymous_args[0];


  switch(primary_anonymous_arg)
  {
    case 'help': this.renderHelp(); break;
    case 'account': accountController.respondToConsoleArgs(argv); break;
    default: this.renderWelcome(); break;
  }


},

renderHelp()
{
    console.log('this is the help menu')
},

renderWelcome(callback) {



  console.log(
    chalk.white(
      figlet.textSync('Coinpouch', { horizontalLayout: 'full' })
    )
  );

  console.log('Coinpouch is an open-source light ethereum wallet for developers.')
  console.log("\n")
  console.log('Use "coinpouch help" to a list of commands.')
  console.log("\n")

  //inquirer.prompt(questions).then(callback);
},

getGithubCredentials(callback) {
  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Github username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}


}
