export default function caesarCipher(text, key) {
  const alphabet = buildDatabase();
  let returnString = "";
  for (let letter of text) {
    // if we aren't able to use a string method, just add it in
    const searchValue = letter.toUpperCase();
    let orgKey = findKey(alphabet, searchValue);
    if (orgKey === undefined) {
      returnString += letter;
      continue;
    }
    const newKey = calculateKey(orgKey, key);
    returnString += alphabet.get(newKey);
  }

  return returnString;
}

function buildDatabase() {
  // creating our initial alphabet for our shifts
  const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const database = new Map();
  for (let i = 0; i < data.length; i++) {
    database.set(i, data[i]);
  }

  return database;
}

function findKey(database, searchValue) {
  for (const [key, value] of database) {
    if (value === searchValue) {
      return key;
    }
  }
}

function calculateKey(original, add) {
  const alphabetLength = 26; // Length of the alphabet
  // Calculate the new key with proper wrapping
  let newKey = (original + add) % alphabetLength;
  if (newKey < 0) {
    newKey += alphabetLength;
  }

  return newKey;
}
