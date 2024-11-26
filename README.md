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

### JSX

JSX es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript. Es una parte fundamental de React, ya que facilita la creación de componentes.

Ejemplo de JSX:

```javascript
const App = () => {
 return <h1>Hello, World!</h1>;
};
```

### Herrammientas para crear un proyecto de React

- [Create React App](https://create-react-app.dev/): Herramienta oficial para crear proyectos de React con configuración predefinida.

- [Vite](https://vitejs.dev/): Herramienta de desarrollo ultrarrápida para proyectos de React, Vue, Svelte y Vanilla JS.

### Diferencias entre Create React App (CRA) y Vite para crear un proyecto de React

## 1. **Tiempo de Instalación**

- **CRA**: Es relativamente lento al iniciar un nuevo proyecto debido a que instala todas las dependencias y configuraciones necesarias desde el inicio.
- **Vite**: Mucho más rápido en la instalación inicial gracias a su arquitectura moderna que no necesita instalar todas las dependencias al comenzar.

## 2. **Velocidad de Desarrollo (HMR)**

- **CRA**: Utiliza Webpack como empaquetador, lo que puede hacer que el Hot Module Replacement (HMR) sea más lento, especialmente en proyectos grandes.
- **Vite**: Proporciona un HMR casi instantáneo al aprovechar el poder de ESModules, haciendo que los cambios en el código se reflejen rápidamente.

## 3. **Soporte para Módulos ECMAScript (ESM)**

- **CRA**: Utiliza una arquitectura tradicional basada en Webpack que no aprovecha al máximo los módulos ESM nativos del navegador.
- **Vite**: Funciona directamente con ESM, lo que significa que puedes aprovechar módulos más modernos y tener un entorno de desarrollo más eficiente.

## 4. **Tamaño de la Configuración Inicial**

- **CRA**: Proporciona un proyecto con una configuración más pesada debido a la integración con Webpack y Babel.
- **Vite**: Vite es mucho más ligero y modular. Puedes personalizar la configuración sin una carga pesada por defecto.

## 5. **Configurabilidad**

- **CRA**: Es difícil de configurar, ya que abstrae muchas configuraciones bajo el capó. Necesitas usar `eject` para tener control completo del build.
- **Vite**: Vite es muy fácil de configurar y ofrece flexibilidad desde el principio sin necesidad de hacer `eject`.

## 6. **Compatibilidad con Tipos de Archivos (Assets)**

- **CRA**: Requiere configuraciones adicionales para soportar archivos como imágenes, fuentes y otros recursos.
- **Vite**: Integra soporte para varios tipos de archivos de forma nativa, permitiendo importar CSS, imágenes, fuentes, etc., sin configuraciones adicionales.

## 7. **Soporte para JSX**

- **CRA**: Utiliza Babel para procesar JSX, lo cual puede ser más lento en proyectos grandes.
- **Vite**: Utiliza esbuild para compilar JSX, lo que es mucho más rápido en comparación con Babel.

## 8. **Build para Producción**

- **CRA**: El proceso de build es más lento, ya que Webpack es más pesado y está diseñado para manejar muchas dependencias.
- **Vite**: Utiliza esbuild para una construcción rápida y eficiente, lo que reduce significativamente los tiempos de build.

## 9. **Ecosistema y Popularidad**

- **CRA**: Es más popular y tiene un ecosistema más grande, por lo que es más fácil encontrar soporte o guías en línea.
- **Vite**: Está creciendo rápidamente en popularidad debido a su enfoque moderno, pero puede tener menos soporte en comparación con CRA en algunos aspectos.

## 10. **Soporte para TypeScript**

- **CRA**: Incluye soporte nativo para TypeScript sin configuraciones adicionales, pero el proceso de build puede ser más lento debido a Webpack y Babel.
- **Vite**: También soporta TypeScript de manera eficiente, pero su build es más rápido gracias al uso de esbuild.

## 11. **Ecosistema de Plugins**

- **CRA**: Utiliza el ecosistema de plugins de Webpack y Babel.
- **Vite**: Tiene un ecosistema de plugins creciente basado en Rollup, lo que lo hace modular y fácil de extender.

## 12. **Conclusión**

- **CRA**: Ideal para proyectos donde la simplicidad y el soporte de la comunidad son más importantes que la velocidad. Es una opción sólida para quienes prefieren configuraciones más estables y tradicionales.
- **Vite**: Es más adecuado para desarrolladores que priorizan la velocidad y la flexibilidad, especialmente en proyectos modernos que requieren tiempos de carga rápidos y builds eficientes.

### Componentes

¿Qué es un componente?

Un componente en React es una pieza reutilizable de la interfaz de usuario. Se puede pensar en los componentes como bloques de construcción que juntos forman la aplicación completa. Cada componente puede tener su propia lógica y estilo.

Los componentes en React son funciones o clases que retornan elementos de JSX (JavaScript XML), una extensión de JavaScript que permite escribir HTML dentro de JavaScript.

- Componentes funcionales:

```javascript
const Saludo = ({nombre}) => <h1>Hola, {nombre}!</h1>;
```

- Componentes de clase:

```javascript
class Saludo extends React.Component {
 render() {
  return <h1>Hola, {this.props.nombre}!</h1>;
 }
}
```

### ¿Para qué sirven los Componentes?

- Reutilización de código: Puedes crear un componente una vez y usarlo en múltiples partes de la aplicación.

- Mantenimiento: Separar la aplicación en componentes más pequeños y especializados facilita su mantenimiento y escalabilidad.

- Modularidad: Ayuda a dividir la UI en piezas más pequeñas y manejables.

### Buenas prácticas en Componentes

- Dividir en componentes pequeños: Es mejor tener muchos componentes pequeños que un componente gigante que haga muchas cosas.

- Nombres claros: Los nombres de los componentes deben ser descriptivos.

- Mantener el estado en el componente adecuado: Solo coloca el estado donde realmente se necesita.

- Evitar lógica pesada dentro de la UI: Mueve la lógica compleja fuera de los componentes de presentación (como funciones de utilidades).

- Componentes puros: Siempre que sea posible, crea componentes "puros" que no manejen estado, sino que solo reciban props y devuelvan JSX.

### Reutilización de componentes

Una de las ventajas de React es la reutilización de componentes. Puedes crear componentes genéricos y reutilizarlos en diferentes partes de la aplicación.

Ejemplo de componente genérico:

```javascript
const Boton = ({texto, onClick}) => <button onClick={onClick}>{texto}</button>;
```

### Props

Las props (propiedades) son la forma de pasar datos a los componentes en React. Las props son inmutables y se pasan de arriba hacia abajo en la jerarquía de componentes.

Ejemplo de uso de props:

```javascript
const Saludo = ({nombre}) => <h1>Hola, {nombre}!</h1>;
const App = () => <Saludo nombre="Humberto" />;
```

### Prop Children + Fragment

La prop especial `children` permite pasar elementos JSX anidados a un componente. Puedes usar `children` para envolver contenido dentro de un componente.

Ejemplo de uso de `children`:

```javascript
const Card = ({children}) => <div className="card">{children}</div>;
const App = () => (
 <Card>
  <h2>Título</h2>
  <p>Contenido de la tarjeta</p>
 </Card>
);
```

Los fragmentos (`<></>`) son una forma de envolver múltiples elementos JSX sin agregar nodos adicionales al DOM.

```javascript
const App = () => (
 <>
  <h1>Título 1</h1>
  <h2>Título 2</h2>
 </>
);
```

### Exportar e Importar Componentes

Exportación por defecto para componentes: Es común exportar los componentes React por defecto, ya que suelen ser el único elemento exportado por archivo y es más fácil de importar.

Exportación sin default para utilidades y constantes: Para funciones de utilidad, hooks personalizados o constantes, se recomienda usar export sin default, ya que permite agrupar varias exportaciones en un solo archivo y la importación es más clara.

Ejemplo de exportación por defecto:

```javascript
const Saludo = ({nombre}) => <h1>Hola, {nombre}!</h1>;
export default Saludo;
```

Ejemplo de exportación sin default:

```javascript
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
```

### Inmutabilidad en React

La inmutabilidad es un concepto clave en React que consiste en no modificar directamente los datos, sino crear copias de los mismos. Esto ayuda a prevenir efectos secundarios y facilita el seguimiento de los cambios en la aplicación.

Ejemplo de inmutabilidad en React:

```javascript
// Modificación directa (mutación)
const numeros = [1, 2, 3];
numeros.push(4); // Modifica el array original

// Inmutabilidad (crea una copia)
const nuevosNumeros = [...numeros, 4]; // Crea una nueva copia del array
```

- Por qué es importante:

1. React compara los objetos previos con los nuevos para optimizar la actualización del DOM (re-render).

2. Manipular el estado directamente puede causar errores impredecibles en la interfaz.

3. La inmutabilidad facilita el seguimiento de los cambios en la aplicación.

### Prop key y map()

La prop `key` es un atributo especial que se utiliza en React para identificar de forma única los elementos de una lista. Es importante incluir `key` al renderizar listas de elementos para mejorar el rendimiento y la eficiencia de React.

- Por qué es importante:

1. Ayuda a React a identificar qué elementos han cambiado, se añadido o eliminado.

2. Mejora el rendimiento al evitar la re-renderización innecesaria de elementos.

3. Evita errores y advertencias en la consola de desarrollo.

Ejemplo de uso de `key` con `map()`:

```javascript
const frutas = ["manzana", "plátano", "naranja"];

const listaFrutas = frutas.map((fruta, index) => <li key={index}>{fruta}</li>);
```

### Estilos en React

Hay varias formas de aplicar estilos a los componentes en React. Puedes usar CSS tradicional, CSS-in-JS, módulos CSS, o incluso inline styles. Cada enfoque tiene sus ventajas y desventajas, y la elección depende del proyecto y las preferencias del equipo.

- CSS tradicional:

```css
/* styles.css */
.card {
 background-color: lightblue;
}
```

```javascript
// Componente
import "./styles.css";

const Card = () => <div className="card">Contenido de la tarjeta</div>;
```

- CSS-in-JS (Styled Components):

```javascript
import styled from "styled-components";

const Card = styled.div`
 background-color: lightblue;
`;

const App = () => <Card>Contenido de la tarjeta</Card>;
```

- Módulos CSS:

```css
/* styles.module.css */
.card {
 background-color: lightblue;
}
```

```javascript
// Componente
import styles from "./styles.module.css";

const Card = () => <div className={styles.card}>Contenido de la tarjeta</div>;
```

- Inline styles:

```javascript
const cardStyles = {
 backgroundColor: "lightblue",
};

const Card = () => <div style={cardStyles}>Contenido de la tarjeta</div>;
```

### Introducción a React Hooks

Los Hooks son funciones que permiten usar el estado y otras características de React sin escribir una clase. Fueron introducidos en React 16.8 y cambiaron la forma en que componemos la lógica en componentes.

### Ventajas de los Hooks

- Facilitan el uso del estado y el ciclo de vida en componentes funcionales.
- Promueven la reutilización de lógica entre componentes.
- Evitan el uso excesivo de componentes de clase y hacen el código más limpio y sencillo.

### Principales Hooks

- `useState`: Manejo de estado local en un componente.
- `useEffect`: Manejo de efectos secundarios, como llamadas a API o suscripciones.
- Otros: `useContext`, `useReducer`, `useMemo`, etc.

### Reglas de los Hooks

#### Sigue la convención de nombres para Custom Hooks

- **Qué significa**: Los custom hooks (tus propios hooks) deben empezar con `use` en su nombre, como `useFetch`, `useAuth`, etc.
- **Por qué**: Esto permite que React identifique estas funciones como hooks y aplique las reglas de validación automáticamente.

#### Ejemplo Correcto

```javascript
function useCounter(initialValue = 0) {
 const [count, setCount] = useState(initialValue);
}
```

---

#### Evita usar Hooks dentro de condicionales

- **Qué significa**: No coloques Hooks dentro de condicionales, ya que esto puede llevar a que se pierda el estado o se creen referencias incorrectas.

Ejemplo Incorrecto

```javascript
if (condicion) {
 const [count, setCount] = useState(0); // Incorrecto: Hook dentro de un condicional
}
```

---

#### Evita usar Hooks dentro de loops

- **Qué significa**: No coloques Hooks dentro de loops, ya que esto puede llevar a que se pierda el estado o se creen referencias incorrectas.

Ejemplo Incorrecto

```javascript
for (let i = 0; i < 5; i++) {
 const [count, setCount] = useState(0); // Incorrecto: Hook dentro de un loop
}
```

---

#### Usa Hooks solo en componentes funcionales o funciones personalizadas (custom hooks)

- **Qué significa**: Los Hooks solo deben usarse en componentes funcionales de React o en funciones personalizadas que empiecen con `use`.

Ejemplo Correcto

```javascript
function MyComponent() {
 const [count, setCount] = useState(0);
 return <p>{count}</p>;
}

function useCustomHook() {
 const [value, setValue] = useState("Hello");
 return [value, setValue];
}
```

#### Evita usar Hooks dentro de callbacks innecesarios

- **Qué significa**: No coloques Hooks dentro de callbacks de otras funciones, ya que esto puede llevar a que se pierda el estado o se creen referencias incorrectas.

Ejemplo Incorrecto

```javascript
const handleClick = () => {
 const [count, setCount] = useState(0); // Incorrecto: Hook dentro de un callback
 setCount(count + 1);
};
```

### Hook: `useState`

El hook `useState` permite agregar un estado local a los componentes funcionales. Devuelve un array con dos elementos:

1. El valor actual del estado.

2. Una función para actualizar el valor del estado.

### Sintaxis Básica

```javascript
const [count, setCount] = useState(initialValue);
```

- `count`: Es el estado que estamos definiendo.
- `setCount`: Es la función para actualizar el estado.
- `initialValue`: Valor inicial del estado.

### Ejemplo Básico: Contador

```javascript
import React, {useState} from "react";

function Contador() {
 const [count, setCount] = useState(0);

 return (
  <div>
   <p>Has hecho clic {count} veces</p>
   <button onClick={() => setCount(count + 1)}>Incrementar</button>
  </div>
 );
}

export default Contador;
```

**Explicación**: Cada vez que el botón es presionado, `setCount` actualiza el estado `count` y el componente se vuelve a renderizar con el nuevo valor.

### `state` vs `setState`

- `state` es la variable que almacena el valor actual del estado.
- `setState` es la función que permite modificar el valor de `state`. La razón para separar estas dos es mantener el estado inmutable, es decir, el valor de `state` no se modifica directamente, sino que se crea una nueva versión a través de `setState`.

### Ejemplo de diferencia

```javascript
const [name, setName] = useState("John");

// Incorrecto: mutación directa de estado
name = "Doe";

// Correcto: usando setState para actualizar el estado
setName("Doe");
```

### Resumen del Ciclo de Vida de useState

- Inicialización: Solo una vez en la primera renderización.
- Actualización: Mediante setState, provoca un re-render del componente.
- Persistencia en Re-renders: El estado persiste entre renderizados sin usar el valor inicial.
- Inmutabilidad: React gestiona el estado como inmutable.
- Persistencia durante la vida del componente: La referencia del estado no cambia entre renderizados.
- Desmontaje: El estado se descarta al desmontar el componente.

### Hook `useEffect`

El hook `useEffect` permite realizar efectos secundarios en componentes funcionales. Se ejecuta después de cada renderizado y puede limpiar los efectos cuando el componente se desmonta.

### Sintaxis Básica useEffect

```javascript
useEffect(() => {
 // Código de efecto secundario
}, [dependencies]);
```

- `dependencies`: Un array opcional de dependencias que determina cuándo se ejecuta el efecto. Si no se proporciona, el efecto se ejecuta después de cada renderizado.

### Ejemplo Básico: Título de la Página

```javascript
import React, {useEffect, useState} from "react";

function PageTitle() {
 const [count, setCount] = useState(0);

 useEffect(() => {
  document.title = `Contador: ${count}`;
 }, [count]);

 return (
  <div>
   <p>Has hecho clic {count} veces</p>
   <button onClick={() => setCount(count + 1)}>Incrementar</button>
  </div>
 );
}
```

**Explicación**: El efecto se ejecuta cada vez que `count` cambia, actualizando el título de la página con el valor actual de `count`.

### `useEffect` con Dependencias

- Si `dependencies` es un array vacío (`[]`), el efecto se ejecuta solo una vez después del primer renderizado.

- Si `dependencies` contiene valores, el efecto se ejecuta cada vez que uno de esos valores cambia.

- Si no se proporciona `dependencies`, el efecto se ejecuta después de cada renderizado.

### Ejemplo de `useEffect` sin Dependencias

```javascript
useEffect(() => {
 console.log("Efecto ejecutado");
});
```

**Explicación**: Este efecto se ejecuta después de cada renderizado del componente.

### Ejemplo de `useEffect` con Dependencias

```javascript
useEffect(() => {
 console.log("Efecto ejecutado");
}, [count]);
```

**Explicación**: Este efecto se ejecuta solo cuando `count` cambia.

### Limpieza de Efectos

El hook `useEffect` puede devolver una función de limpieza que se ejecuta cuando el componente se desmonta o cuando las dependencias cambian.

### Ejemplo de Limpieza de Efectos

```javascript
useEffect(() => {
 console.log("Efecto ejecutado");

 return () => {
  console.log("Efecto limpiado");
 };
}, [count]);
```

**Explicación**: La función de limpieza se ejecuta antes de que el efecto se vuelva a ejecutar o cuando el componente se desmonta.

### Resumen del Ciclo de Vida de useEffect

- Inicialización: Se ejecuta después del primer renderizado.

- Actualización: Se ejecuta después de cada renderizado si las dependencias han cambiado.

- Limpieza: Se ejecuta antes de que el efecto se vuelva a ejecutar o cuando el componente se desmonta.

- Dependencias: Determinan cuándo se ejecuta el efecto.

- Efectos secundarios: Se utilizan para realizar tareas como llamadas a API, suscripciones, actualizaciones del DOM, etc.

### Hook `useMemo`

El hook `useMemo` permite memorizar el resultado de una función para evitar cálculos innecesarios en componentes funcionales.

### Sintaxis Básica useMemo

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- `computeExpensiveValue`: Función que realiza un cálculo costoso.

- `[a, b]`: Dependencias que determinan cuándo se recalcula el valor.

### Ejemplo Básico: Cálculo de Factorial

```javascript
import React, {useState, useMemo} from "react";

function Factorial() {
 const [number, setNumber] = useState(0);

 const factorial = useMemo(() => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
   result *= i;
  }
  return result;
 }, [number]);

 return (
  <div>
   <input
    type="number"
    value={number}
    onChange={(e) => setNumber(parseInt(e.target.value))}
   />
   <p>
    Factorial de {number} es: {factorial}
   </p>
  </div>
 );
}
```

**Explicación**: El cálculo del factorial se realiza solo cuando `number` cambia, evitando cálculos innecesarios en cada renderizado.

### Resumen del Ciclo de Vida de useMemo

- Inicialización: Se ejecuta después del primer renderizado.

- Actualización: Se ejecuta cuando las dependencias cambian.

- Memorización: Almacena el resultado de una función costosa para evitar cálculos innecesarios.

- Dependencias: Determinan cuándo se recalcula el valor.

- Cálculos costosos: Se utilizan para optimizar el rendimiento de componentes.

### Hook `useCallback`

El hook `useCallback` permite memorizar una función para evitar la creación de nuevas instancias en cada renderizado de componentes.

### Sintaxis Básica useCallback

```javascript
const memoizedCallback = useCallback(() => {
 // Código de la función
}, [dependencies]);
```

- `dependencies`: Un array de dependencias que determina cuándo se crea una nueva instancia de la función.

### Ejemplo Básico: Manejo de Eventos

```javascript
import React, {useState, useCallback} from "react";

function Eventos() {
 const [count, setCount] = useState(0);

 const increment = useCallback(() => {
  setCount(count + 1);
 }, [count]);

 return (
  <div>
   <p>Has hecho clic {count} veces</p>
   <button onClick={increment}>Incrementar</button>
  </div>
 );
}
```

**Explicación**: La función `increment` se memoriza y solo se crea una nueva instancia cuando `count` cambia, evitando re-renderizados innecesarios.

### Resumen del Ciclo de Vida de useCallback

- Inicialización: Se ejecuta después del primer renderizado.

- Actualización: Se ejecuta cuando las

- Dependencias cambian.

- Memorización: Almacena una función para evitar la creación de nuevas instancias.

- Dependencias: Determinan cuándo se crea una nueva instancia de la función.

- Manejo de Eventos: Se utiliza para optimizar el rendimiento de componentes que manejan eventos.

### Guía de Instalación y Configuración de React Router

## 1. Instalar React Router

Primero, instala la biblioteca en tu proyecto:

```bash
npm install react-router-dom
```

## 2. Configurar el enrutador principal

Envuelve tu aplicación con el componente `<BrowserRouter>` para habilitar el enrutamiento:

```jsx
import {BrowserRouter} from "react-router-dom";

function App() {
 return (
  <BrowserRouter>
   <div>{/* Aquí irán tus rutas */}</div>
  </BrowserRouter>
 );
}

export default App;
```

## 3. Definir las rutas

Utiliza el componente `<Routes>` y define las rutas con `<Route>` dentro de `<BrowserRouter>`:

```jsx
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
```

- **`path`**: Define la URL.
- **`element`**: El componente que se renderizará.

## 4. Crear los componentes de las páginas

Crea componentes para cada página (por ejemplo, `Home`, `About`, `NotFound`).

```jsx
// Home.jsx
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;

// About.jsx
function About() {
  return <h1>About Page</h1>;
}

export default About;

// NotFound.jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

## 5. Navegar entre rutas

Utiliza el componente `<Link>` o el hook `useNavigate` para navegar entre las páginas.

**Con `<Link>`:**

```jsx
import {Link} from "react-router-dom";

function Navbar() {
 return (
  <nav>
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
  </nav>
 );
}

export default Navbar;
```

**Con `useNavigate`:**

```jsx
import {useNavigate} from "react-router-dom";

function Example() {
 const navigate = useNavigate();

 const goToAbout = () => {
  navigate("/about");
 };

 return <button onClick={goToAbout}>Go to About</button>;
}

export default Example;
```

## 6. Parámetros de ruta

Si necesitas manejar rutas dinámicas, usa `:param` en el `path` y accede al valor con `useParams`.

**Configurar una ruta con parámetro:**

```jsx
<Route path="/user/:id" element={<User />} />
```

**Usar `useParams` en el componente:**

```jsx
import {useParams} from "react-router-dom";

function User() {
 const {id} = useParams();
 return <h1>User ID: {id}</h1>;
}

export default User;
```

## 7. Manejar Redirecciones

Utiliza el componente `<Navigate>` para redirigir a otra ruta.

```jsx
import {Navigate} from "react-router-dom";

function ProtectedRoute({isLoggedIn}) {
 return isLoggedIn ? <h1>Welcome!</h1> : <Navigate to="/" />;
}
```

## 8. Opcional: Rutas anidadas

Puedes definir rutas anidadas utilizando el componente `<Outlet>`.

**Configurar rutas anidadas:**

```jsx
<Route path="/dashboard" element={<Dashboard />}>
 <Route path="stats" element={<Stats />} />
 <Route path="settings" element={<Settings />} />
</Route>
```

**Usar `<Outlet>` en el componente:**

```jsx
import {Outlet} from "react-router-dom";

function Dashboard() {
 return (
  <div>
   <h1>Dashboard</h1>
   <Outlet />
  </div>
 );
}

export default Dashboard;
```

## Resumen

1. Instala React Router.
2. Envuelve tu aplicación con `<BrowserRouter>`.
3. Define tus rutas con `<Routes>` y `<Route>`.
4. Crea componentes para tus páginas.
5. Navega entre rutas con `<Link>` o `useNavigate`.
6. Maneja parámetros dinámicos con `useParams`.
7. Utiliza `<Navigate>` para redirecciones.
8. Implementa rutas anidadas con `<Outlet>`.

### Testing en React

### Instalar dependencias

```bash
npm install vitest happy-dom -D
```

¿Que es vitest?

Vitest es un marco de pruebas de próxima generación impulsado por Vite. Es rápido, liviano y fácil de usar. Viene con un conjunto de características que lo hacen ideal para probar aplicaciones modernas.

¿Que es happy-dom?

Es una implementación ligera y simplificada del DOM (Document Object Model) en JavaScript. El DOM es una interfaz de programación que representa y manipula la estructura de documentos HTML y XML como un árbol de objetos.

Happy-DOM se utiliza comúnmente en entornos de prueba para simular el DOM en un entorno de ejecución de JavaScript, permitiendo a los desarrolladores realizar pruebas de unidades o integración sin depender de un navegador real. Esta herramienta es especialmente útil para pruebas en entornos de Node.js o entornos de ejecución de JavaScript sin un navegador completo.

### Configuracion de Vite

En el archivo vite.config.ts agregar la siguiente configuracion:

```typescript
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment:'happy-dom'
  }
})

```

referencia: <https://vitest.dev/guide/>

### Agregar script de test

En el archivo package.json agregar el siguiente script:

```json
"scripts": {
    "test": "vitest"
  },
```

### Crear primer test de ejemplo

Crear la carpeta test, la idea es que su estructura sea parecida a la de src y dentro de ella el archivo App.test.tsx con el siguiente contenido:

```typescript
import { describe, test, expect } from 'vitest'

describe('App', () => {
  test('should render', () => {
    expect(true).toBe(true)
  })
})
```

Anatomia de un test:

- describe: agrupa un conjunto de pruebas
- test: define una prueba
- expect: define una asercion

Estructura de un test:

- Arrange: preparar el escenario
- Act: ejecutar la prueba
- Assert: verificar el resultado

Tipos de test:

- Test End to End (E2E): Prueba de extremo a extremo, prueba la aplicación completa como si fuera un usuario real.
- Test de integración: Prueba la integración entre componentes.
- Test Unitario: Prueba una unidad de código, por ejemplo una función.
- Test estático: Prueba el código sin ejecutarlo.

Ejectuar el comando npm run test

```bash
npm run test
```

referencia: <https://vueschool.io/lessons/your-first-test?friend=vueuse>

## Agregar RTL (React Testing Library)

¿Que es RTL?

React Testing Library es una biblioteca de utilidades de prueba liviana y simple que le permite escribir pruebas de componentes React que son fáciles de mantener y confiables en el tiempo. Esta biblioteca se basa en dos principios básicos:

- Pruebe el comportamiento del componente desde la perspectiva del usuario.
- Escriba pruebas que simulen la forma en que los usuarios interactúan con su aplicación.

referencia: <https://testing-library.com/docs/react-testing-library/intro/>

Instalar dependencia:

```bash
npm install @testing-library/react -D
```

## Seleccionar elementos

Para seleccionar elementos en el DOM RTL nos provee de una serie de funciones:

- getByText: Selecciona un elemento por su texto.
- getByRole: Selecciona un elemento por su rol.
- getByLabelText: Selecciona un elemento por su etiqueta.
- getByPlaceholderText: Selecciona un elemento por su placeholder.
- getByAltText: Selecciona un elemento por su texto alternativo.
- getByDisplayValue: Selecciona un elemento por su valor.

referencia: <https://testing-library.com/docs/dom-testing-library/api-queries>

Es importante tener en cuenta los ordenes de prioridad que nos provee RTL para seleccionar elementos:

1.Consultas Accesibles para Todos: Reflejan la experiencia de usuarios visuales/mouse y aquellos que utilizan tecnología asistencial.

- getByRole: Principal preferencia para casi todo, especialmente útil con la opción de nombre.
- getByLabelText: Ideal para campos de formularios, emula la forma en que los usuarios encuentran elementos en formularios.
- getByPlaceholderText: Utilizado cuando solo se dispone de un marcador de posición.
- getByText: Para encontrar elementos no interactivos basados en su contenido de texto.
- getByDisplayValue: Útil para obtener el valor actual de un elemento de formulario con valores llenados.

2.Consultas Semánticas: Selectores compatibles con HTML5 y ARIA.

- getByAltText: Útil para elementos que admiten texto alternativo (img, área, input).
- getByTitle: La atributo de título no es consistentemente leído por lectores de pantalla y no es visible por defecto.

3.IDs de Prueba:

- getByTestId: Recomendado en casos donde no se puede emparejar por rol o texto, o cuando no tiene sentido (por ejemplo, texto dinámico)."

Ejemplos:

```typescript
const button = screen.getByRole('button', { name: /click me/i })
const button = screen.getByText(/click me/i)
const button = screen.getByLabelText(/click me/i)

const input = screen.getByPlaceholderText(/username/i)
const input = screen.getByDisplayValue(/username/i)

const image = screen.getByAltText(/logo/i)

const element = screen.getByTestId('test-id')
```

Ejemplos de roles:

- Botones:

``` typescript
// (<button>, <input type="button">, <input type="submit">, <input type="reset">)
screen.getByRole('button');
screen.getByRole('button', { name: /click me/i });
```

- Enlaces:

``` typescript
// (<a>)
screen.getByRole('link');
screen.getByRole('link', { name: /click me/i });
```

- Campos de Entrada:

``` typescript
// (<input>, <textarea>)
screen.getByRole('textbox');
screen.getByRole('textbox', { name: /username/i });
```

- Para campos de contraseña:

``` typescript
screen.getByRole('textbox', { type: 'password' });
```

- Imágenes:

``` typescript
// (<img>)
screen.getByRole('img');
```

- Listas:

``` typescript
// (<ul>, <ol>, <li>)
screen.getByRole('list');
```

- Para listas ordenadas:

``` typescript
screen.getByRole('list', { type: 'ordered' });
```

- Para elementos de lista:

``` typescript
screen.getByRole('listitem');
```

- Encabezados:
Para todos los encabezados:`

``` typescript
// (<h1>, <h2>, <h3>, <h4>, <h5>, <h6>)
screen.getByRole('heading');
```

- Parrafo:

``` typescript
// (<p>)
screen.getByRole('paragraph');
```

- Para un encabezado específico (por ejemplo, nivel 2):

``` typescript
screen.getByRole('heading', { level: 2 });
```

- Formularios:

``` typescript
// (<form>)
screen.getByRole('form');
```

- Celdas de Tabla:

``` typescript
// (<td>, <th>)
screen.getByRole('cell');
```

Tambien podemos buscar elementos dentro de un elemento:

```typescript
const form = screen.getByRole('form')

const button = form.querySelector('button')
```

## Simular un usuario real

¿Que hace user-event de RTL?

user-event es una biblioteca que contiene una colección de funciones que simulan eventos del usuario. Estas funciones se pueden usar para probar cómo un usuario interactuaría con su aplicación.

referencia: <https://testing-library.com/docs/user-event/intro>

instalar dependencia:

```bash
npm install @testing-library/user-event -D
```

Creamos el usuario de prueba en el archivo App.test.tsx

```typescript
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
```

### API Context en React

### ¿Qué es Context en React?

Context es una característica de React que permite pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Es útil para compartir datos que son necesarios en muchos componentes de la aplicación, como el tema, la autenticación del usuario, etc.

### ¿Por qué usar Context en React?

- Evita la "prop drilling": Pasar props a través de múltiples niveles de componentes puede ser tedioso y propenso a errores. Context permite compartir datos de forma más eficiente.

- Centraliza el estado: Context permite centralizar el estado de la aplicación en un solo lugar, lo que facilita la gestión y actualización de los datos.

- Mejora la escalabilidad: Al separar la lógica de estado de los componentes, Context hace que la aplicación sea más escalable y fácil de mantener.

### ¿Cómo funciona Context en React?

Context consta de tres partes principales:

- **Provider**: Un componente que proporciona los datos a los componentes descendientes.

- **Consumer**: Un componente que consume los datos proporcionados por el Provider.

- **Context Object**: Un objeto que contiene los datos compartidos.

### Crear un Context en React

Para crear un Context en React, sigue estos pasos:

1. Importa createContext de React.

2. Crea un nuevo Context con createContext.

3. Define un Provider para envolver los componentes que necesitan acceder a los datos.

4. Proporciona los datos a través del value prop del Provider.

5. Consume los datos en los componentes descendientes utilizando el hook useContext.

### Ejemplo de Context en React

```javascript
import React, {createContext, useContext} from "react";

// Crear un nuevo Context
const ThemeContext = createContext();

// Crear un Provider
const ThemeProvider = ({children}) => {
 const theme = "light";

 return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// Consumir el Context

const App = () => {
 const theme = useContext(ThemeContext);

 return <div>Theme: {theme}</div>;
};

// Envolver la aplicación con el Provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
```

### Propagación de Context en React

El Context en React se propaga a través del árbol de componentes, lo que significa que los componentes descendientes pueden acceder a los datos proporcionados por el Provider. Esto permite compartir datos de forma eficiente sin tener que pasar props manualmente en cada nivel.

### Buenas Prácticas con Context en React

- Usa Context para datos globales: Context es ideal para compartir datos globales, como el tema, la autenticación del usuario, etc.

- Evita el uso excesivo de Context: No uses Context para compartir datos que solo son necesarios en un par de componentes. En su lugar, utiliza props para pasar datos a componentes específicos.

- Divide el Context en múltiples Contexts: Si tienes datos relacionados pero independientes, considera dividirlos en múltiples Contexts en lugar de un solo Context grande.

- Usa Context con moderación: Context es una herramienta poderosa, pero no siempre es la mejor opción. Antes de usar Context, considera si hay una forma más simple de compartir datos, como props o hooks.
