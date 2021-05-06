React Router

React Router es una libería para gestionar rutas en aplicaciones que
utilicen ReactJS. Está inspirada en el sistema de enrutado de Ember.js
y su forma de manejar las rutas es un poco diferente de lo que podemos
ver en otros sistemas, como ASP.NET MVC, AngularJS, Express o Compojure.

Una de las cosas que más llama la atencion de ReactJS es que no intenta
solucionar todos los problemas de golpe y se centra sólo en la parte de
generación de vistas. Eso hace que podamos elegir entre distintas implementaciones
para el resto de componentes de la aplicación, y en este caso concreto de las rutas,
la solución propuesta por React Router y sus rutas anidades es muy interesante.

Por una parte, la definición de la tabla de rutas como tal creo que se podría desacoplar
más de JSX y hacerla con un API diseñada para ser usada con Javascript «puro», pero por 
otra parte la naturaleza jerárquica de las rutas encaja muy bien con el pseudo XML de JSX
a la hora de anidarlas.

