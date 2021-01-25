const prompt = require('readline-sync')
const fs = require('fs');
const { Console } = require('console');

const readFile = fs.readFileSync('./contacts.json', 'utf-8');
const data = JSON.parse(readFile);
let obj = data.person;
let personDetails = "", emailId = "", zip = "", phoneNumber = "";

class AddressBook {

    addPerson = () => {
        console.log("Enter your first Name:");
        let firstname = this.contactValidation();
        console.log("Enter your Last Name:");
        let lastname = this.contactValidation();
        console.log("Enter your Address:");
        let address = this.contactValidation();
        console.log("Enter your city:");
        let city = this.contactValidation();
        console.log("Enter your state:");
        let state = this.contactValidation();
        console.log("Enter your zip:");
        let zip = this.zipValidation();
        console.log("Enter your phoneNumber:");
        let phoneNumber = this.phoneNumValidation();
        console.log("Enter your EmailId:");
        let emailId = this.emailValidation();

        data['person'].push({
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phoneNumber: phoneNumber,
            emailId: emailId
        });

        this.writeToJSONFile();
    }

    writeToJSONFile = () => {
        fs.writeFileSync('contacts.json', JSON.stringify(data));
        console.log("\nData added Successfully\n")
    }

    viewContacts = () => {
        let obj = {};
        obj = data;
        console.log("Data is:");
        console.log(obj['person']);
    }

    updateContacts = () => {
        var input = prompt.question("Enter First Name to Search Contact: ");
        var status = false;
        obj.forEach(person => {
            if (input == person.firstname) {
                console.log("\nContact found!");
                status = true;
                console.log("1. Update ID" +
                    "\n2. Update First Name" +
                    "\n3. Update Last Name" +
                    "\n4. Update Address" +
                    "\n5. Update City" +
                    "\n6. Update State" +
                    "\n7. Update Zip" +
                    "\n8. Update Mobile Number" +
                    "\n9. Update Email" +
                    "\nPress any key to Exit")
                var option = prompt.question("Enter number to select option: ");
                switch (option) {
                    case "1":
                        input = prompt.question("Enter New ID: ");
                        try {
                            person.newId = input;
                            console.log("\nContact modified successfully");
                            console.log(obj['person']);
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "2":
                        input = prompt.question("Enter New First Name: ");
                        try {
                            person.firstname = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "3":
                        input = prompt.question("Enter New Last Name: ");
                        try {
                            person.lastname = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "4":
                        input = prompt.question("Enter New Address: ");
                        try {
                            person.address = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "5":
                        input = prompt.question("Enter New City: ");
                        try {
                            person.city = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "6":
                        input = prompt.question("Enter New State: ");
                        try {
                            person.state = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "7":
                        input = prompt.question("Enter New Zip: ");
                        try {
                            person.zip = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "8":
                        input = prompt.question("Enter New Mobile Number: ");
                        try {
                            person.phoneNumber = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "9":
                        input = prompt.question("Enter New Email: ");
                        try {
                            person.emailId = input;
                            console.log("\nContact modified successfully");
                            console.log(data)
                        } catch (error) {
                            console.log(error);
                        }
                        break;

                    default:
                        console.log("Nothing modified !!");
                        break;
                }
            }
        });

        if (!status) {
            console.log("Contact not found !!!");
        }
    }

    deleteContacts = () => {
        let delContacts = prompt.question("Enter the id which you want to delete:");
        obj.splice(delContacts, 1);
        this.writeToJSONFile();
        console.log("\nContact Deleted Successfully")
        console.log(data)
    }

    searchContacts = () =>{
        let option = 'Y';
        while(option == "Y"){
            switch(prompt.question("1.Search By city\n" + "2.Search By state\n" + "3.Search By Zip\n")){
                case "1":
                    this.searchByCity();
                    break;
                case "2":
                    this.searchByState();
                    break;
                case "3":
                    this.searchByZip();
                    break;
                default:
                    console.log("Invalid Input!")  
            }  
        }
    }

    searchByCity = () => {
        let input = prompt.question("Enter City:");
        obj.forEach(person => {
            if (person.city == input) {
                console.log(person)
            }
        });
    }

    searchByState = () => {
        let input = prompt.question("Enter State:");
        obj.forEach(person => {
            if (person.state == input) {
                console.log(person)
            }
        });
    }

    searchByZip = () => {
        let input = prompt.question("Enter Zip:");
        obj.forEach(person => {
            if (person.zip == input) {
                console.log(person)
            }
        });   
    } 
    
    contactValidation = (personDetails) => {
        let contactPattern = /^[A-Z]+[a-zA-Z]{2,}$/;
        let PersonDetails = personDetails;
        const result = contactPattern.test(PersonDetails);
        return result;
        /*  //personDetails = prompt.question('');
            if (result == null) {
            console.log("Invalid Input!!");
            this.contactValidation();

        }
        return personDetails;*/
    }

    zipValidation = (zip) => {
        let zipPattern = /^[0-9]{6}$/;
        let Zip = zip;
        const result = zipPattern.test(Zip);
        return result;
       /* personDetails = prompt.question('');
        const result = personDetails.match(zipPattern);
        if (result == null) {
            console.log("Invalid Input!!");
            this.zipValidation();
        }
        return personDetails;*/
    }

    phoneNumValidation = (phoneNum) => {
        let phonePattern = /^((91){1})[ ]([98765]{1})([0-9]{9})$/;
        let phoneNumber = phoneNum;
        const result = phonePattern.test(phoneNumber);
        return result;
        /*personDetails = prompt.question('');
        const result = personDetails.match(phonePattern);
        if (result == null) {
            console.log("Invalid Input!!");
            this.phoneNumValidation();
        }
        return personDetails;*/
    }

    emailValidation = (emailId) => {
        let emailPattern = /^^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;
        let Email = emailId;
        const result = emailPattern.test(Email);
        return result;
        /*if (result == null) {
            console.log("Invalid Input!!");
            this.emailValidation();
        }
        return personDetails;*/
    }
}
module.exports = new AddressBook();
