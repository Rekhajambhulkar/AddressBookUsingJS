const main = require('./main');
const prompt = require('readline-sync')

console.log("<<<<<<Welcome to the AddressBook Application>>>>>>");
let option = 'Y';

while(option == "Y"){
    switch(prompt.question("1.Add Contacts" + "\n2.View Contacts" + "\n3.Update Contacts" + "\n4.Delete contacts" + "\n5.Search Contacts\n")){
        case "1":
            main.addPerson();
            break;
        case "2":
            main.viewContacts();
            break;
        case "3":
            main.updateContacts();
            break;
        case "4":
            main.deleteContacts();   
            break;  
        case "5":
            main.searchContacts();       
        default:
            console.log("Invalid input!")    
    }
}