
module.exports = {


respondToConsoleArgs(argv)
{
  let anonymous_args = argv['_'];
  let secondary_anonymous_arg = anonymous_args[1];


  switch(secondary_anonymous_arg)
  {
    case 'new': this.createNewAccount(); break;
    case 'list': this.renderAccountList(); break;
    default: this.renderAccountHelp(); break;
  }


},

createNewAccount()
{
  console.log('new account ')
},

renderAccountList()
{
  console.log(' account list ')
},

renderAccountHelp()
{
 console.log('this is the account help menu')
},




}
