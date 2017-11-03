
var inquirer    = require('inquirer');
var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var accountController      = require('./accountController');
var networkController      = require('./networkController');

var Web3 = require('web3');

const GITHUB_URL = "https://www.github.com/admazzola/coinpouch";

module.exports = {

initCoinpouch(network_name)
{

  var web3 = new Web3(new Web3.providers.HttpProvider(networkController.getInfuraURL(network_name)))


  console.log(web3)

  var connected = web3.isConnected();
    console.log(connected );

  var balance = web3.eth.getBalance("0xfA71E45ef0f83eC0424B641690A41b5c0ddff10a" );
  console.log(balance.toNumber() );

  var defaultAccount = web3.eth.defaultAccount;
console.log(defaultAccount); // ''

// set the default account
//web3.eth.defaultAccount = '0x8888f1f195afa192cfee860698584c030f4c9db1';


},

respondToConsoleArgs(argv)
{
  let anonymous_args = argv['_'];
  let primary_anonymous_arg = anonymous_args[0];


  switch(primary_anonymous_arg)
  {
    case 'help': this.renderHelp(); break;
    case 'network': networkController.respondToConsoleArgs(argv); break;
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
