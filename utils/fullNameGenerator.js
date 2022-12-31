// personObject is expected to have keys 'first' and 'last'
export const fullNameGenerator = (personObject) => {
  let {
    person: { firstName, lastName },
  } = personObject;

  // checks if key 'lastName' exists
  // if 'lastName' key exists then concat its value with 'firstName' value followed by a Whitespace
  return `${firstName?.trim()}${lastName ? " " + lastName?.trim() : ""}`;
};
