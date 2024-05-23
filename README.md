# REACT

## [¿Qué es REACT?](https://www.reactjs.wiki/que-es-react)

Es un biblioteca de JavaScript de código abierto, desarrollada por Facebook para construir interfaces de usuario (UI).  
Esta basada en la componetización de UI (se divide en componentes).  
Es especialmente útil para desarrollar _aplicaciones de página única_ (**SPA**, por sus siglas en ingles), donde puedes interactuar con la aplicación sin necesidad de recargar la página.  
_**Ejemplo de SPA**_:

- Google Maps
- Facebook

## React CASOS DE USO

- Aplicaciones web -> React
- Aplicaciones Móvile -> React Native
- Aplicaciones de escritorio -> Electron
- Plugins/Widgets
- Smart TV
- VR (Realidad Virtual) -> React 360

## ¿Por qué REACT?

- Mucha demanda laboral
- Te facilita para desarrollar aplicaciones móviles con React Native
- El mantenimiento es garantizado, soporte continuo.
- El concepto te servirá tanto para aprender otros framework ( Angular, Vue, etc )
- Tiene una API muy estable.
- Comunidad bastante grande y activa.
- Actualizaciones y futuro cercano a la web.

## [React CARACTERÍSTICAS](https://www.reactjs.wiki/cuales-son-las-caracteristicas-principales-de-react)

- Componentes
- Virtual DOM
- Declarativo
- Data Binding Unidireccional
- Utiliza **JSX**(JavaScript XML)
- Universal
- Extensa comunidad

## ¿Qué es un componente?

Es una pieza de código que renderiza una parte de la interfaz, estos pueden reutilizados, parametrizados y puede tener estado propio o no .  
Los componentes de React se crean usando funciones o clases.  
**_Componente funcional_**: Creado mediante una función.  
**_Componente de clase_**: Creado mediante una clase.  
Los componentes pueden ser:

| Componente funcional  | Componente de clase |
| --------------------- | ------------------- |
| Comp. funcional       | Comp. de clase      |
| Comp. de presentación | Comp. contenedor    |
| Comp. sin estado      | Comp. con estado    |
| Comp. tonto           | Comp. inteligente   |

**_Nombrado de componentes_**:

| Notación     | Nombre componente |
| ------------ | ----------------- |
|              | FirApp            |
|              | Loading           |
| `PascalCase` | Gallery           |
|              | Picture           |
|              | RegisterForm      |

## [¿Qué es el Virtual DOM?](https://youtu.be/EJgNlZpSEBI?si=i_PlvxdpfuDap6QI)

El `DOM virtual` o `virtual DOM`(VDOM) es una representación en memoria del `DOM real`.  
Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz, pero en lugar de modificar el `DOM real`, React modifica el virtual DOM y, a continuación, sincroniza el `virtual DOM` con el `DOM real` mediante un proceso llamado "reconcilización".  
Es una abstracción del `DOM HTML`, es más liviano ya que no implica interacción directa con la API DOM del navegador.  
React solo actualiza las partes que han cambiado, para evitar operaciones muy costosas.

## React es declarativo. ¿Qué lo hace declarativo?

No le indicamos las instrucciones para renderizar la interfaz.  
Es su lugar le indicamos que debe renderizar y React lo renderiza.

**Declarativo**

```
const elementos = <h1>Hello, world</h1>
```

**Imperativo**

```
const element = document.createElement("h1")
element.innerHTML = "Hello, world"
```

## ¿Qué es JSX?

Es una extensión de JavaScript que permite mezclar JS y HTML (XML), de ahí su nombre _JavaScript XML_.  
El código JSX es compilado a JS por un **Transpiler**(Transpilador o Compilador), como BabelJS, SWC.  
Podemos insertar expresiones de JavaScript en nuestro código JSX.

```
let name = “Simon”;

<h1>{name}</h1>
```

## [¿Diferencia entre componente y elemento en React?](https://www.reactjs.wiki/cual-es-la-diferencia-entre-componente-y-elemento-en-react)

**Componente**: Es una función o clase que recibe props y retorna un elemento.  
**Elemento**: Es un objeto que representa un _nodo_ del DOM o instancia de un componente.

## Fragmentos

Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.  
Forma corta: `<></>`  
Forma larga: `<React.Fragment></React.Fragment>`

```
const Gallery = () => {
  return (
    <>
      <Picture/>
      <Picture/>
    </>
  )
}
```

## Props

Es un objeto que contiene las propiedades de un componente, estos `inmutables` y no se puede modificar desde un componente hijo.  
Las propiedades son datos que se pueden pasar entre componentes (de padre a hijo).  
Son una forma de parametrizar un componente, al igual que una función.  
Podemos pasar cualquier tipo de datos, incluso otros componentes (children).

```
const FirstApp = (props) => {
	return (
		<>
			<h1>{props.title}</h1>
			{props.children} // <h2>Conociendo las props</h2>
		</>
	);
};

<FirstApp title="FirstApp">
  <h2>Conociendo las props</h2>
</FirstApp>
```

También podemos desestructurar las props.

```
const FirstApp = ({title, children}) => {
	return (
		<>
			<h1>{title}</h1>
			{children} // <h2>Conociendo las props</h2>
		</>
	);
};

<FirstApp title="FirstApp">
  <h2>Conociendo las props</h2>
</FirstApp>
```

### Props - PropTypes

Podemos definir el tipo de `propTypes` que son aceptados por un componente (string, number, object, func, etc).  
Estos tipos son comprobados durante el renderizado y el desarrollo de la app, no en producción.  
Para usar PropTypes hacemos usado de la libería`prop-types`

```
npm install prop-types -E
```

Usando propTypes

```
import PropTypes from "prop-types"

const App = ({message}) => {
	return (
		<>
			<h1>{message}</h1>
		</>
	)
}

App.propTypes = {
	// message: PropTypes.string; // "opcional"
	message: PropTypes.string.isRequired, // obligatorio
}

```

### Props - DefaultProps

Podemos tener `defaultProps` de las props definidas, estas son usadas si no enviamos las props.  
Las `defaultProps` se ejecutan antes que nuestras `props`.  
Podemos hacer de las `defaultProps` sin tener definido los `propTypes`.

```
import PropTypes from "prop-types"

const App = ({message}) => {
	return (
		<>
			<h1>{message}</h1>
		</>
	)
}

App.propTypes = {
	// message: PropTypes.string; // "opcional"
	message: PropTypes.string.isRequired, // obligatorio
}

App.defaultProps = {
	message: "Bienvenido al curso se React"
}

```

### Prop children

Es una `prop` especial que se pasa a los componentes.  
Es un objeto que envuelve un componente.
La `prop children` puede ser componentes o elemento de react.

Ejemplo:

```
// declaración
const Card = ({ title, children }) => {
	return (
		<>
			<h2>{title}</h2>
			<div>{ children }</div>
		</>
	)
}

// uso
<Card title="Título de la card">
	<p>Contenido de la card</p> // children
</Card>
```
