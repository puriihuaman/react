# REACT

## ¿Qué es REACT?

React es un biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI).  
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

## React CARACTERÍSTICAS

- Hace uso de **Componentes Reutilizables**
- Utiliza **JSX**(JavaScript XML)
- Virtual DOM
- Data Binding Unidireccional
- Extensa comunidad

## ¿Qué es JSX?

Es una extensión de sintaxis de JavaScript que permite mezclar JS y HTML (XML), de ahí su nombre _JavaScript XML_.  
El código JSX es compilado a JS por un **Transpiler**(Transpilador), como BabelJS.  
Podemos insertar expresiones de JavaScript en nuestro código JSX.

```
let name = “Simon”;
<h1>{name}</h1>
```

## [¿Qué es el Virtual DOM?](https://youtu.be/EJgNlZpSEBI?si=i_PlvxdpfuDap6QI)

El DOM virtual (VDOM) es un concepto de programación en el que una representación virtual de la interfaz de usuario se mantiene en la memoria y se sincroniza con el DOM "real" mediante un proceso llamado reconciliación.  
Es una abstracción del DOM HTML y es más liviano ya que no implica interacción directa con la API DOM del navegador.  
Es un copia muy ligera del DOM (Document Obect Model) real que se guarda en memoria. Esto quiere decir que React hace una copia del DOM real, pero con muy pocas propiedades (las propiedades mas utilizadas de los elementos del DOM real).  
Para realizar cambios en el DOM, React hace una comparación entre el DOM real y Virtual DOM, para no volver a renderizar lo mismo o mínimos cambios.  
React solo actualiza las partes que han cambiado, para evitar operaciones muy costosas.  
El renderizado es comparar los nuevos cambios en el DOM virtual con el DOM real, para identificar que cambios sean producido, para aplicarlo.

## ¿Por qué REACT?

- Mucha demanda laboral
- Te facilita para desarrollar aplicaciones móviles con React Native
- El mantenimiento es garantizado, soporte continuo.
- El concepto te servirá tanto para aprender otros framework ( Angular, Vue, etc )
- Tiene una API muy estable.
- Comunidad bastante grande y activa.
- Actualizaciones y futuro cercano a la web.

## ¿Qué es un componente?

Son pequeñas piezas de código encapsuladas re-utilizable que pueden tener estado o no, estos hacen un trabajo específico.  
También pueden tener un estado o no.  
Es una función que crea un elemento.  
Los nombres de los componentes siempre tiene que ser nombrados con el tipo de notación **“PascalCase”.**
