const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

const archerIsAwake = true;
const prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return (!archerIsAwake && prisonerIsAwake);
}

const petDogIsPresent =false;
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (!knightIsAwake && !archerIsAwake && prisonerIsAwake)
  );
}   

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));