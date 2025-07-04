//Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:
const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

//Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:
const archerIsAwake = true;
const prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

//Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return (!archerIsAwake && prisonerIsAwake);
}
//Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false:
const petDogIsPresent =false;
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (!knightIsAwake && !archerIsAwake && prisonerIsAwake)
  );
}   

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));