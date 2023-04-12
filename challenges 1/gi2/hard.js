const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;

const tomBMI = tomMass / ((tomHeight / 12) ** 2);
const jerryBMI = jerryMass / ((jerryHeight / 12) ** 2);

const tomHigherBMI = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);
