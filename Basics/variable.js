const accountId = 1445566
let accountEmail = "sami.lajwan3121@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur" 
let accountState; // undefined

// accountId = 2 //--> not allowed to change const Value

accountEmail = "abc.31212G@c.com "
accountPassword = "2121212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use VAR because of the issue in scope of block code
*/

console.table([accountId, accountEmail, accountPassword, accountId, accountCity, accountState])


