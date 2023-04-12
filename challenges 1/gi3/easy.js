function exerciseOfTheDay() {
  let exercise = "rest"; // default exercise
  
  function setExercise(newExercise) {
    exercise = newExercise;
  }
  
  function getExercise() {
    return exercise;
  }
  
  return function(name) {
    setExercise(name);
    console.log("Today's exercise: " + getExercise());
  }
}

// Usage:
const todayExercise = exerciseOfTheDay();
todayExercise("running"); // Output: Today's exercise: running
todayExercise("yoga"); // Output: Today's exercise: yoga
