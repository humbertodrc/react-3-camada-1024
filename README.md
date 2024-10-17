# Frontend 3

## De JavaScript Vanilla a React

### Recuros

- [React Documentacion](https://react.dev/)

### Extensiones

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [React/Redux/react-router Snippets](https://marketplace.visualstudio.com/items?itemName=discountry.react-redux-react-router-snippets)
- [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

### Repaso de JavaScript Vanilla

React se construye principalmente con las características de JavaScript moderno (ES6 y versiones posteriores). Asegúrate de que los estudiantes estén familiarizados con los siguientes conceptos:

#### Variables

- `var`: No se recomienda su uso, ya que tiene un alcance global.
- `let`: Se recomienda su uso, ya que tiene un alcance local.
- `const`: Se recomienda su uso, ya que tiene un alcance local y no se puede reasignar.

#### Arrow Functions

Las funciones flecha son una forma más concisa de escribir funciones, y tienen un comportamiento diferente respecto al valor de this.

```javascript
const myFunction = (param1, param2) => {
 return param1 + param2;
};
```

### Destructuring

La destructuración permite extraer valores de objetos o arrays de manera sencilla. Se usa mucho en React, especialmente al trabajar con props.

- Destructuración de objetos:

```javascript
const persona = {nombre: "Humberto", edad: 25};
const {nombre, edad} = persona; // Extrae 'nombre' y 'edad' del objeto
```

- Destructuración de arrays:

```javascript
const frutas = ["manzana", "plátano", "naranja"];
const [primera, segunda] = frutas; // primera = "manzana", segunda = "plátano"
```

### Template Literals (Plantillas de Cadena)

Las plantillas de cadena permiten incrustar variables y expresiones dentro de una cadena usando backticks (`).

```javascript
const nombre = "Humberto";
const saludo = `Hola, ${nombre}!`; // "Hola, Humberto!"
```

### Default Parameters (Parámetros por Defecto)

Puedes asignar valores por defecto a los parámetros de las funciones.

```javascript
const saludar = (nombre = "Invitado") => `Hola, ${nombre}`;
saludar(); // "Hola, Invitado"
```

### Spread Operator (...) y Rest Parameters

El spread operator permite copiar o combinar arrays/objetos de manera más sencilla, y el rest operator (...) puede agrupar argumentos o propiedades restantes.

- Spread operator:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Combina arrays
const obj1 = {nombre: "Humberto"};
const obj2 = {...obj1, edad: 25}; // Combina objetos
```

- Rest parameters:

```javascript
const sumar = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
sumar(1, 2, 3); // 6
```

### Operador Ternario

El operador ternario es una forma concisa de escribir una sentencia if/else.

```javascript
const esMayorDeEdad = (edad) =>
 edad >= 18 ? "Mayor de edad" : "Menor de edad";
esMayorDeEdad(25); // "Mayor de edad"
```

### Array Methods: map(), filter(), reduce()

React utiliza estos métodos de arrays para iterar y manipular datos de una forma declarativa. Algunos ejemplos clave:

- `map()`: Se usa para transformar arrays. En React es muy útil para renderizar listas de componentes.

```javascript
const numeros = [1, 2, 3];
const duplicados = numeros.map((num) => num * 2); // [2, 4, 6]
```

- `filter()`: Filtra elementos en un array según una condición.

```javascript
const edades = [25, 17, 30, 15];
const mayoresDeEdad = edades.filter((edad) => edad >= 18); // [25, 30]
```

- `reduce()`: Reduce un array a un solo valor.

```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, num) => acc + num, 0); // 10
```

<!-- Otros metodos de Array -->

### Otros métodos de Array

Además de `map()`, `filter()` y `reduce()`, hay otros métodos de arrays que son útiles en React:

- `find()`: Encuentra el primer elemento que cumple una condición.

```javascript
const personas = [
 {nombre: "Humberto", edad: 25},
 {nombre: "María", edad: 30},
];
const maria = personas.find((persona) => persona.nombre === "María");
```

- `some()`: Verifica si al menos un elemento cumple una condición.

```javascript
const edades = [25, 17, 30, 15];
const esMayor = edades.some((edad) => edad >= 18); // true
```

- `every()`: Verifica si todos los elementos cumplen una condición.

```javascript
const edades = [25, 17, 30, 15];
const todosMayores = edades.every((edad) => edad >= 18); // false
```

- `sort()`: Ordena los elementos de un array.

```javascript
const edades = [25, 17, 30, 15];
const edadesOrdenadas = edades.sort((a, b) => a - b); // [15, 17, 25, 30]
```

### Metodos de Array que no se recomiendan utilizar con React

- `forEach()`: Itera sobre un array, pero no devuelve un nuevo array. No se recomienda su uso en React, ya que no es declarativo.

- `splice()`: Modifica un array eliminando o reemplazando elementos. No se recomienda su uso en React, ya que muta el array original.

- `push()`, `pop()`, `shift()`, `unshift()`: Métodos que mutan el array original. En React, se recomienda usar métodos inmutables.

### Babel

Babel es una herramienta que permite transformar código JavaScript moderno (ES6+) en código JavaScript compatible con versiones anteriores. React utiliza Babel para compilar el código JSX y ES6 a JavaScript estándar.

Ejemplo de uso con CDN:

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 </head>
 <body>
  <div id="root"></div>
  <script type="text/babel">
   const App = () => <h1>Hello, World!</h1>;
   ReactDOM.render(<App />, document.getElementById("root"));
  </script>
 </body>
</html>
```
