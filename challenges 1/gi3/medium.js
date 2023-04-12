function calculatePizzaSlices(slices, people) {
  const slicesPerPerson = slices / people;
  if (Number.isNaN(slicesPerPerson) || slicesPerPerson <= 0) {
    return `Sorry, there is no way to split ${slices} slices of pizza evenly among ${people} people.`;
  }
  return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${slices} slice pizza.`;
}
