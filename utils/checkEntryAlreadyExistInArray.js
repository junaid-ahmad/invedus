import { fullNameGenerator } from "./fullNameGenerator";

export const checkEntryAlreadyExistInArray = (array, element) => {
  let isContactAlreadyExist = false;

  for (let contact of array) {
    let contactFullName = fullNameGenerator(contact).toLowerCase();
    if (element === contactFullName) {
      isContactAlreadyExist = true;
      break;
    }
  }

  console.log(isContactAlreadyExist);

  return isContactAlreadyExist;
};
