# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño de la experiencia de usuario UX](#3-diseño-de-la-experiencia-de-usuario-ux)
* [4. Diseño de la interfaz de usuario UI](#4-diseño-de-la-interfaz-de-usuario-ui)
* [5. Otros enlaces de interés](#5-otros-enlaces-de-interés)
* [6. Checklist](#6-checklist)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)

***

## 1. Preámbulo

Pokémon Go es un juego de realidad aumentada, que extiende sus 
dominios fuera de las consolas de videojuego para alojarse en 
los teléfonos inteligentes. Y en el "mundo real".

Los jugadores buscan sobresalir como entrenadores de Pokémon,
capturándolos hasta completar una colección y poder adiestrarlos 
para que ganen batallas frente a otras pokémon.


## 2. Resumen del proyecto

Se desarrolló una página web titulada PokéDesk por medio de la cual 
se puede observar datos relacionados al juego Pokémon Go, que serán 
de mucha utilidad para los usuarios de dicha aplicación.

## 3. Diseño de la experiencia de usuario UX

### Definición del producto

PokéDesk es una aplicación , que tiene como objetivo principal ser un 
catálogo virtual, que brinda variedad de información acerca de los 
pokémon para que puedas ser un gran maestro pokémon!

En esta aplicación nuestros usuarios podrán conocer los tipos de 
pokémon existentes, su línea de evolución y muchos datos más que le 
servirá si desea participar en una batalla pokémon; además es una web 
de muy fácil manejo y es responsive, es decir puede visualizarse tanto 
en web como en mobile.

### Principales usuarios de producto 

1. Entrenador novato
2. Maestro Pokémon

### Objetivos de estos usuarios en relación con el producto

Obtener información rápida sobre uno o varios pokémon con base en 
uno o varios criterios útiles:
- Tomar decisiones sobre qué pokémon son mejores para atrapar. 
- Saber escoger mejor sus pokémon para las peleas.

### Datos más relevantes que quieren ver en la interfaz

Los Pokémon tienen características únicas que determinan las 
decisiones que toma el usuario como su tipo; y los datos a 
continuación:

- buddy-distance-km: distancia en km que debe caminar el usuario 
con un pokémon con buddy para obtener 1 caramelo de dicho pokémon.
- stats: base de ataque,defensa, salud, max CP(combat points) 
y max HP (health points).
- resistant: a qué tipos de pokémon es resistente.
- weaknesses: contra qué tipos de pokémon es débil.
- quick-move: Movimientos rápidos.
- special-attack: Ataques especiales
- STAB (Same Type Attack Bonus): Si el Pokémon que usa el movimiento 
es del mismo tipo que el movimiento, el daño aumenta en un 20%
- DPS (damage-per-second): Se calcula dividiendo el daño base del 
movimiento por el STAB entre el tiempo que toma el movimiento.
- EPS (energy-per-second): Se calcula dividiendo la energía entre 
el tiempo que toma el movimiento.
 

### Cuándo utilizan o utilizarían el producto?

En cualquier momento, ya que puede ser visualizado de un pc de 
escritorio y del mobile.

### El producto cómo resuelve el problema del usuario.

Permite que el usuario tenga toda la información necesaria y en 
un sólo lugar para poder llegar a ser el mejor maestro pokémon.

### Historias de usuario

Se creó 6 historias de usuario para la realización de este proyecto,
a continuación se detalla cada una, junto con los criterios de 
aceptación de cada una.

#### Historia de Usuario 1

Yo como: usuario interesado en conocer más del juego pokémon go
Quiero: ver toda la lista de pokémon existentes en el juego(imagen y nombre)
Para: ver a todos los pokémon en una sola lista.

* Criterios de aceptación (PO y usuario)

- El usuario ingresa a una app publicada en gh-pages y que es 
responsive (diseñada para cada dispositivo desktop y mobile).
- El usuario al ingresar a la página principal, podrá visualizar una 
lista de Pokémon con su imagen y nombre a la vez (6 por fila en web, 
y 3 por fila en mobile).

#### Historia de Usuario 2

Yo como: jugador de Pokemon go
Quiero: ordenar la data inicial de todo los pokemon
Para: verlos por su nombre en orden alfabético

* Criterios de aceptación (PO y usuario)

- El usuario puede observar una barra de ordenado en la parte superior 
de la data mostrada.
- El usuario puede hacer click en la barra de ordenado y se desplegara 
una lista de opciones de ordenamiento de forma vertical.
- El usuario puede hacer click en una opción de la barra superior 
desplegable y ordenar la lista total de pokémon en orden alfabético 
(ascendente/descendente).

#### Historia de Usuario 3

Yo como: jugador de pokémon go
Quiero: buscar cuántos y cuales son los pokémon que hay por cada tipo
Para: poder conocer qué pokémon pertenecen a cada tipo  y poder conformar 
su equipo para una batalla pokémon

* Criterios de aceptación (PO y usuario)

- El usuario puede observar una barra de filtrado en la parte superior 
de la data mostrada.
- El usuario puede hacer click la barra y se desplegara una lista de 
filtros por el tipo de pokémon.
- El usuario puede hacer click en una opción (tipo de pokémon) y filtrar 
la lista total de pokémon según el tipo elegido.

#### Historia de Usuario 4

Yo como: jugador de Pokémon Go 
quiero: obtener mayor información de un pokémon que yo seleccione
para: poder saber información con respecto a su evolución, stats ,
resistencia, weakness y estar preparado para una batalla pokémon.

* Criterios de aceptación (PO y usuario)

- El usuario podrá seleccionar un pokémon para ver mayor información 
de este.
- El usuario podrá observar la línea completa de evolución del Pokémon 
seleccionado.
- El usuario podrá observar data numérica: cantidad de caramelos para 
cada evolución y buddy-distance.
- El usuario podrá observar  los datos de resistencia y weakness del 
pokémon seleccionado.

#### Historia de Usuario 5

Yo como: jugador de pokémon go
Quiero: realizar una búsqueda por nombre de un pokémon 
para: poder buscar un pokémon en particular de una manera más rápida

* Criterios de aceptación (PO y usuario)

- El usuario en la versión desktop puede observar en la parte superior 
derecha una caja de texto.
- El usuario en la versión mobile puede observar en la parte superior 
derecha un icono de lupa, que al darle click se desplegará una caja 
de texto.
- El usuario puede ingresar solo letras en la caja de texto.
- Si el usuario ingresa mal el nombre de un pokémon, le saldrá un 
mensaje indicando que no se encontró un pokémon para el texto ingresado.
- El usuario puede visualizar el resultado de la búsqueda de un pokémon 
por nombre.

#### Historia de Usuario 6

Yo como: jugador de Pokémon Go interesado en batallas Pokémon
Quiero: conocer los movesets , dps y eps del pokémon
Para: poder usar un pokémon estratégicamente en una batalla pokémon

* Criterios de aceptación (PO y usuario)

- El usuario podrá observar un cuadro de doble entrada donde podrá 
observar los movesets, la mejor combinación de quick move + special 
attack y el resultado final DPS y EPS de la combinación.


## 4. Diseño de la Interfaz de Usuario (UI)

### Prototipo de baja fidelidad

Desarrollamos los prototipos en baja fidelidad(sketch), tanto para desktop
como para mobile.

#### Prototipos para desktop

  ![Desktop hu1-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu1-papel.PNG)

  ![Desktop hu2-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu2-papel.PNG)

  ![Desktop hu3-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu3-papel.PNG)

  ![Desktop hu4-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu4-papel.PNG)

  ![Desktop hu5-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu5-papel.PNG)

  ![Desktop hu6-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu6-papel.PNG)

#### Prototipos para mobile

  ![Mobile hu1-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mobile-hu1-papel.PNG)

  ![Mobile hu2-Papel](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mobile-hu2-papel.PNG)

### Feedback recibido por usuarios

Entrevistamos a varios tipos de usuario para poder obtener un feedback más 
completo y así poder contemplar varios aspectos para los diferentes tipos de 
usuario.

#### Feedback N°1: (Coach) 06/03

- Modificación de las historias, al filtrar por tipo/rareza.
- Colocar un indicador de cantidad a mostrar con respecto a cada filtro.
- Realizar los prototipos de baja fidelidad para concretar las vistas
de las historias.
- Añadir historia para informacón adicional para el usuario.
- La historia adicional de los top ten, debe ser de una cantidad limitada
y ordenada de mayor a menor que es lo mas convencional.

#### Feedback N°2: (usuario novato) 08/03

- La historia de usuario que te muestra un cálculo para determina el top 
ten de los pokémons más poderosos, no es tan necesaria, debido a que en 
el juego los pokémons utilizados siendo los menos evolucionados tiene la 
capacidad de desenvolverse en batalla al igual que los pokémons mas 
evoucionados.
- La historia de usuario orientada a cómo atrapar los pokémon debería 
estar mejor explicada, ya que hay algunos términos no muy entendibles como
egg, buddy distance.
- El nombre del botón que señaliza la historia de usuario que hace referencia
 al combo , deberia ser mas entendible para un usuario que no sabe del juego,
 ya que "combo" no explica mucho.
- Explicación más didactica sobre la buddy distance en la historia de usuario
 titulada catch.

#### Feedback N°3: (jugador de Pokemon Go) 09/03

- Para la explicación de %huida,%captura,spawn y egg se podría contemplar 
usar una imagen o gif que explique de una forma más didáctica sin palabras 
o con ejemplos(de cada 10 pokémons vistos sólo 1 huye).
- Para las imágenes de los stats sería bueno utilizar la iconografía del
 propio juego.
- Para la barra de filtro se podría colocar una barra interactiva que me 
permita seleccionar filtros múltiples.
- La splash screen está bien pero no es muy necesaria, porque obstaculiza 
el propósito principal del usuario.


#### Feedback N°4: (estudiante bootcamp) 10/03

- La splash screen no es indispensable, ya que no agrega un valor a la 
visualizacón de la historia para el usuario.
- La imagen de pokémon debe tener alguna señalización o ser más obvia 
para que el usuario sepa que puede darle click.
- Debería ser todo en una sola página, evitar hacer 2 páginas diferentes.
- Las historias deben ser diferentes  e intentar cumplir con todos los 
objetivos de aprendizaje.


#### Feedback N°5: (jugador competitivo de Pokémon Go) 11/03

- Las pantallas para mostrar no deberían ir separadas, deberían estar en
 una sola y mostrar la información principal y concisa para que el usuario 
 pueda ver de una sóla vez lo más importante.
- La información mostrada de cada pokémon si es entendible.
- La información relevante a mostrar como información adicional para cada
 pokémon principlamente son : datos de evolución, los datos de stats son 
 muy importantes para el jugador promedio que desea empezar a jugar en 
 batllas, y los datos de movesets son esenciales para los jugadores que ya
 compiten en batllas pokémon.
- Ya no es necesaria la barra lateral para mostrar la data adicional.


### Prototipo de alta fidelidad

Desarrollamos los prototipos en alta fidelidad en Figma, tanto para desktop
como para mobile.

#### Prototipos para desktop

  ![Desktop hu1-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu1-figma.PNG)

  ![Desktop hu2-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu2-figma.PNG)

  ![Desktop hu3-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu3-figma.PNG)

  ![Desktop hu4-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu4-figma.PNG)

  ![Desktop hu5-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu5-figma.PNG)

  ![Desktop hu6-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/desk-hu6-figma.PNG)

#### Prototipos para mobile

  ![Mobile hu1-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu1-figma.PNG)

  ![Mobile hu2-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu2-figma.PNG)

  ![Mobile hu3-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu3-figma.PNG)

  ![Mobile hu4-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu4-figma.PNG)

  ![Mobile hu5-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu5-figma.PNG)

  ![Mobile hu6-Figma](https://github.com/weirdkidwithwindows/LIM012-data-lovers/blob/master/src/img/mob-hu6-figma.PNG)


### Testeos de usabilidad

Se realizó los testeos de usabilidad haciendo uso de los prototipos de 
alta fidelidad elaborados en Figma, para ello se elaboró una lista de tareas 
a realizar para cada uno de los participantes, luego se detalla el escenario 
de uso en el que se encuentra cada uno de los participantes, y para finalizar 
se redactó un informe con los fallos de usabilidad detectados, planteando 
propuestas para solucionarlos y las conclusiones.

#### Tareas a realizar por el usuario:

1. Buscar un pokémon por su nombre "Pikachu".
2. Buscar los pokémon del tipo eléctrico.
3. Ordenar en orden alfabético ascendente la lista de los pokémon.
4. Ver mayor información de un pokémon.
5. Buscar cuánto dps genera un pokémon de acuerdo a un moveset en 
específico.

* Participante 1: Ex jugador de Pokemón Go 
* Escenario de uso: 
El usuario ha jugado pokémon go hace un par de años y esta interesado en 
volver a jugar, para ello desea actualizarse sobre la información del 
juego y desea buscar si hay nuevos pokémon, también quiere saber si hay 
nuevos pokémon por tipo y y si han modificado sus stats.

* Participante 2: Usuario interesado en jugar Pokemón Go 
* Escenario de uso: 
El usuario conoce la serie Pokémon Go, pero no la aplicación, sabe la 
mecánica de atrapar un pokémon, pero no conoce cómo, y desea saber todo 
a detalle para poder comenzar a jugar.

* Participante 3: Usuario que no conoce nada de  Pokemón Go 
* Escenario de uso: 
El usuario no conoce nada acerca del juego ni el contexto, pero al darle
la explicación entendió, desea conocer más sobre el mundo pokémon y 
todo lo que puede hacer en el juego y para ello desea usar nuestra 
aplicación.

* Participante 4: Jugador de Pokemón Go 
* Escenario de uso: 
El usuario juega a diario, conoce todas las mecánicas y está interesado 
en incursionar en las batllas pokémo, y para ello desea aprender sobre 
el dps y eps y lograr ganar las batllas pokémon.

* Participante 5: Jugador competitivo de Pokemón Go 
* Escenario de uso: 
El usuario es un Maestro Pokémon, sabe de todaas las mecánicas e 
información necesaria para poder desempeñarse bien en una batlla 
pokémon.


#### Informe

* Fallos de usabilidad detectados

- Dificultad para buscar un pokémon por su nombre, debido a la 
mala escritura del nombre del pokémon.
- Dificultad para identificar cuál es el dps.

* Propuestas para solucionarlos

- Restringir el uso de sólo letras en la caja de texto de búsqueda
para evitar equivocaciones en el ingreso del nombre del pokémon.
- Crear un función de autocompletado del nombre evitar fallos en la 
escritura del nombre de un pokémon.
- mejorar la visibilidad(colores) de la tabla que muestra los 
valores de dps y eps para os movesets.

* Tareas no realizadas por los usuarios (bloqueos) y sus causas

- Se realizaron todas las tareas por todos los usuarios.

* Listado de conclusiones por cada tarea

- Tarea 1 : Puede mejorarse para evitar errores en la búsqueda
- Tarea 2 : Es completamente funcional
- Tarea 3 : Es completamente funcional
- Tarea 4 : Es completamente funcional
- Tarea 5 : Mejorar la visibilidad de los datos mostrados


## 5. Otros enlaces de interés

### Figma

https://www.figma.com/file/VqfPkgNLmHDmkA47CH9GHc/Prototipo_AltaFidelidad_PokemonGO_mobile?node-id=0%3A1

### Trello

https://trello.com/b/HSpK0f78/data-lovers-pokemon

### Zeplin

https://zpl.io/2vpemXJ

## 6. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.


## 7. Objetivos de aprendizaje

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`).
- [x] Manejar eventos del DOM. (`addEventListener`)
- [x] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)

### Javascript

- [x] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [x] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [x] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [x] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [x] Colaborar en Github (`pull requests`).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).