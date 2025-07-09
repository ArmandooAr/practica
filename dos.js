/*
// ejercisios platzi
en el primer ejercicio nos piden multiplicar cada numero del array por 2, para esto usamos un .map para recorrer cada elemento del array
despues cuando encuentra el numero lo pasa a num => num * 2, y devuelve un nuevo array con los numeros multiplicados por 2

export function multiplyElements(array) {
   // Tu código aquí 👈
   return array.map(num => num *2)
}
   */
/*
el ejercisio me pedia solo el nombre del array y el array me daba el nombre,edad y el ano en el que nacio porlo que volvi a usar map
para recorer cada elmento del array y con (item => item.name) le digo que me devuelva solo el nombre de cada array
export function getNames(array) {
  return array.map(item => item.name);
}
  */
 /*
 addNewAttr me permite agregar un nuevo atrivuto a cada elemenmto array que tenga, array.map lee los 2 arrays que tengo  
taxes es el nuevo atrivuto que quiero agregar, math.floor me ayud a redondear el resulado de item.price * 0.19, item agarra las propiedades que se categorizen item como los numeros
y el .price le indica exacata mente cuales numeros quiero
  // Tu código aquí 👈
  return array.map(item => ({
    taxes: Math.floor(item.price * 0.19)
  }));
}
*/
/*
en este ejercisio solo nos pedia todas las palabras que tenga 4 letras entonces se uso el .filter para recorer y crear un nuevo array
con solo las palbras que tengan 4 letras y con el word basica mente son las palabras y el .length me indica la longitud de los elementos
en el array y con el >= hace que solo me que los elementos que tengan 4 letras
export function filterByLength(array) {
  // Tu código aquí 👈
  return array.filter(word => word.length >= 4);
}
  */

