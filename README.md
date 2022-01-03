# CATPHER

## Usuarios

Este proyecto fue desarrollado pensando en Gatos que quieren conquistar el mundo. Tomando en cuenta que eso sucediera en la realidad, ellos necesitarían un sistema de mensajes codificados para que los humanos no supiéramos cuáles son sus planes.

## Diseño
Respecto al diseño del sitio, decidí utilizar colores fríos, pues al investigar descubrí que los gatos pueden ver ciertos colores, principalmente los colores fríos como azules y verdes.
La idea del sitio es que sea simple y no recargado. Intentaré dejar cada función (codificar y decodificar) en una página direrente de la otra. Lo único que se mantendrán serán el header y el footer que serán estáticos.
Creé un logo simple en Canva que represente al sitio.

## HTML
Luego de estudiar sobre el HTML semántico y sobre las etiquetas en general, armé el esqueleto de la página en HTML. 

## JS
Luego de estudiar sobre la función de cifrado en JavaScript, la aplicaré al sitio y luego agregaré más interacción al mismo.

## CSS
Estudié los selectores de CSS y luego comencé a aplicar el diseño al sitio. 

## 3. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

 ### CSS

- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**

 ### Web APIs

- [ ] **Uso de selectores del DOM**
- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [ ] **Manipulación dinámica del DOM**

 ### JavaScript

- [x] **Tipos de datos primitivos**
- [ ] **Strings (cadenas de caracteres)**
- [ ] **Variables (declaración, asignación, ámbito)**
- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [ ] **Uso de bucles/ciclos (while, for, for..of)**
- [ ] **Funciones (params, args, return)**
- [ ] **Pruebas unitarias (unit tests)**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Uso de linter (ESLINT)**
- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**

  ### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**
- x ] **Crear prototipos para obtener feedback e iterar**
- [ ] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**


### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [x] Permite usar un `offset` negativo.
