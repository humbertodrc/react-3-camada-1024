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

# Diferencias entre Create React App (CRA) y Vite para crear un proyecto de React

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
