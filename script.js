let pwDisplay = document.getElementById("pwDisplay");

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const passwordLength = 12;

function generatePassword() {
    let password = "";
    const allCharacters = upperCase + lowerCase + numbers + symbols;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

console.log("Generated Password: " + generatePassword());

pwDisplay.innerText = generatePassword();