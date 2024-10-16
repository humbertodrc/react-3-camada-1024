const CHARACTERS = [
  'Luke Skywalker',
  'Darth Vader',
  'Yoda',
  'Obi-Wan Kenobi',
  'Han Solo',
  'Leia Organa',
  'Anakin Skywalker',
  'Padmé Amidala',
  'Mace Windu',
  'Qui-Gon Jinn',
  'Count Dooku',
  'Kylo Ren',
  'Rey',
  'Finn',
  'Poe Dameron',
  'BB-8',
  'R2-D2',
  'C-3PO',
  'Chewbacca',
  'Jabba the Hutt',
  'Boba Fett',
  'Darth Maul',
]

const items = CHARACTERS.map((character) => `<li>${character}</li>`)
const list = `<ul>${items.join('')}</ul>`
console.log({ items, list });

// Mostra el contenido
document.getElementById('root').innerHTML = list


// const name2 = "Pedro"
// let name3 = "Juan"

// const arrow = (parma1, parma2) => {
//   return parma1 + param2
// }

// const persona = {
//   nombre: "Humberto",
//   edad: 25
// }

// const {edad, nombre} = persona
// console.log(nombre)
// console.log(edad)

// const frutas = ["banana", "frutilla", "manzana"]
// const [fruta1, _, fruta3] = frutas
// console.log(fruta1, fruta3)

// const nombre4 = "Daniel"
// const saludo = `Hola ${nombre4}`
// console.log(saludo)

// const saludo1 = (nombre = "Ayxa") => `Hola ${nombre}`
// console.log(saludo1())

// const arra1 = [1, 2, 3]
// const arra2 = [...arra1, 3, 4]
// console.log(arra2)

// const obj1 = { nombre: "Oriana" }
// const obj2 = {... obj1, edad: 23 }
// console.log(obj2)


// const suma = (...numero) => numero.reduce((acc, num) => acc + num, 0)
// console.log(suma(1, 2, 6))