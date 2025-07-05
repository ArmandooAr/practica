export function frontDoorResponse(line) {
  return line[0];
}

// Ejemplo de uso:
console.log(frontDoorResponse('Stands so high'));    // Output: 'S'
console.log(frontDoorResponse('Huge hooves too'));   // Output: 'H'