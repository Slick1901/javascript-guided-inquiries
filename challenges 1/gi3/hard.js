function createPII(name, ssn) {
  let pii = {
    name: name,
    ssn: ssn
  };

  return {
    getName: function() {
      return pii.name;
    }
  };
}

let person = createPII("John Doe", "123-45-6789");

console.log(person.getName()); // Outputs "John Doe"
console.log(person.ssn); // Outputs undefined (cannot access directly)
