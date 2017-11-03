
var inquirer    = require('inquirer');
var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');

module.exports = {


respondToConsoleArgs(argv)
{
  let anonymous_args = argv['_'];
  let primary_anonymous_arg = anonymous_args[0];

  console.log(primary_anonymous_arg)

  switch(primary_anonymous_arg)
  {
    case 'help': this.renderHelp(); break;
    default: this.renderWelcome(); break;
  }


},

renderHelp()
{
    console.log('this is the help menu')
},

renderWelcome(callback) {

  console.log('welcome menu')

  console.log(
    chalk.white(
      figlet.textSync('Coinpouch', { horizontalLayout: 'full' })
    )
  );

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
