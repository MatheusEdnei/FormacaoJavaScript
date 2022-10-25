/**
 * Exercises from exercism.org
 *
 * Poetry Club Door Policy.
 */

frontDoorResponse = (line) => {
  console.log(line);
  return line.charAt(0);
};

frontDoorPassword = (password) => capitalize(password);

backDoorResponse = (line) => line.trim().charAt(line.trim().length - 1);

backDoorPassword = (password) => `${capitalize(password)}, please`;

capitalize = (word) => {
  const lower = word.toLowerCase();
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + lower.slice(1);
};

// console.log(frontDoorResponse("Stands"));
// console.log(frontDoorPassword("SHIRE"));
// console.log(backDoorResponse("Stands so high   "));
// console.log(backDoorPassword("horse"));

module.export = frontDoorResponse();