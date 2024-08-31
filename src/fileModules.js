import fs from 'fs';

fs.mkdir('./abcde', (el) => {

    if(el) {

        console.log('Error Creating Directory:', el)
    } else {

        console.log('Directory Created Succesfully')
    }
} ) 
console.log("Created File")