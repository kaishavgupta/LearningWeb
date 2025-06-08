const id="1234"
let emailId="support@alpha.com"
var password="alpa123"
cityAdress="Lucknow"

// id="12345" // This will throw an error because id is a constant and cannot be reassigned
emailId="contact@alpha.com" // This will work because emailId is declared with let and can be reassigned
password="alpha1234" // This will work because password is declared with var and can be reassigned
cityAdress="Delhi" // This will work because cityAdress is declared without var, let, or const and can be reassigned

console.table([id,emailId,password,cityAdress])