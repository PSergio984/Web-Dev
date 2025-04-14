const passwordLength =12;
const lowerCase = true;
const upperCase = true;
const numbers = true;
const symbols = true;

if(passwordLength <=0){
    valid
}

if(allowedChars ===0){

}

function generatePassword(passwordLength,lowerCase,upperCase,numbers,symbols){

         const lower = "abcdefghijklmnopqrstuvwxyz";
         const upper = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
         const nums = "0123456789";
         const syms = "!@#$%^&*()"
        
         let allowedChars = "";
        let password = "";
        
        allowedChars +=lowerCase?lower:"";
        allowedChars +=upperCase?lower:"";
        allowedChars +=nums?lower:"";
        allowedChars +=symbols?lower:"";

        for(let i=0;i<passwordLength;i++){
            const randomIndex = Math.floor(Math.random()*allowedChars.length);
            password+= allowedChars[randomIndex];
        }
  return password;
}
var password=   generatePassword(passwordLength,lowerCase,upperCase,numbers,symbols);

alert(`password is ${password}`)