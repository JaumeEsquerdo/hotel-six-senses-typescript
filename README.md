# UI Hotel Six Senses

Proyecto front de una página de hotel (con referencia al Hotel Six Senses de Ibiza) por Jaume Esquerdo Ramis

Esta aplicación es una muestra funcional de lo que podría ser una página de reservas para un hotel, desarrollada con React y sin conexión real a bases de datos, si con json. El objetivo es simular la experiencia de usuario en un entorno real: permite explorar diferentes habitaciones e instalaciones, visualizar detalles con imágenes dinámicas, y realizar una reserva básica a través de un formulario. Se han aplicado conceptos como rutas dinámicas con `react-router-dom`, gestión global del estado con Context API, y selección de fechas mediante `react-datepicker`. Además, en la galería de habitaciones se simula un diseño tipo masonry layout (en el breakpoint de escritorio), alternando tamaños y posiciones para lograr una composición visual más rica y dinámica sin usar librerías externas.

## Resumen del proyecto

### Repositorio y versión online

[Repositorio Github](https://github.com/JaumeEsquerdo/hotel-six-senses-typescript)

[Versión online desplegada en Vercel](https://hotel-six-senses.vercel.app/)

### 🧱 Tech stack

- React + Vite
- TypeScript
- Node.js
- React Router DOM
- Context API
- React Datepicker
- CSS (modular, con enfoque responsive)
- JSON local como fuente de datos

### Estructura general

El proyecto es una SPA (Single Page Application) en React con rutas gestionadas por react-router-dom. Se compone de varias páginas principales:

/ → Home

/habitaciones → Galería de habitaciones

/habitaciones/:id → Detalle individual de cada habitación

/instalaciones → Galería de instalaciones del hotel

/reservar → Formulario para reservar una habitación

### Rutas y navegación

Se utiliza useLocation() en un custom hook llamado useHeaderTitle() para definir el título actual en el Header según la ruta.

La navegación entre habitaciones individuales se gestiona con Link y useParams().

### Contexto global (AppContext)

Utilizo el contexto global para evitar duplicar codigo/ pasar código de hijo a hijo a hijo...

Se implementa un AppContext con:

isMenuOpen: estado para abrir/cerrar el menú de navegación.

selectedRoom: guarda la habitación seleccionada al navegar entre páginas (por ejemplo, desde el detalle hasta el formulario de reserva).

### Páginas de contenido

- Home
  Landing principal (visual y centrada para q veas el titulo y el nav facil)

- Habitaciones

Muestra una galería de habitaciones.

Cada habitación tiene dos imágenes (default y hover) y se accede a su detalle al hacer clic.

- Detalle de habitación

Usa useParams() para identificar la habitación.

Usa el context para guardar la habitación seleccionada.

Botón para reservar que redirige a /reservar.

- Instalaciones

Galería similar a habitaciones pero con otra fuente de datos (instalaciones).

Muestra título, descripción y dos imágenes por cada instalación.

- Reservar

Formulario con campos de nombre, email, fechas (react-datepicker), tipo de habitación y número de personas (organizadas en un máximo de personas disponibles según habitación).

Se muestra también el precio que va cambiando según el tipo de habitación y las noches reservadas.

Guarda y muestra la habitación seleccionada desde el contexto.

Incluye información adicional sobre el hotel y contacto.

➡️ Al confirmar la reserva, se abre un modal de “reserva completada” que muestra los datos de la reserva, simulando la compra final.
Si el modal se cierra, el formulario y el contexto se reinician, dejando la aplicación lista para una nueva reserva.

- Extras

Se hace un scrollTo(0, 0) en cada página con useEffect para que al entrar empiece desde arriba.

Uso de hooks (useState, useEffect, useContext, useParams, useNavigate) más el personalizado para cambiar de nombre de sección `useHeaderTitle`.

## ✍️ Autor

- **Jaume Esquerdo** · [LinkedIn](https://www.linkedin.com/in/jaume-esquerdo/) · [GitHub](https://github.com/JaumeEsquerdo)

## Fines del proyecto

Este diseño de UI es un proyecto conceptual realizado con fines de portfolio.

Se ha creado un flujo de navegación que simula la experiencia de un usuario, llevando desde la selección de habitación hasta un modal de confirmación de reserva.

La sección de reservas se ha desarrollado con todos los detalles, incluyendo la personalización del formulario y del datepicker, para mostrar cómo se podría gestionar la experiencia de reserva de manera completa, eso sí, sin añadir precios, ya que el hotel no corresponde a un hotel real y los contenidos (imágenes, nombres, secciones) se han utilizado únicamente como inspiración visual.

Los precios y la disponibilidad mostrados no están incluidos para dar prioridad al UI y transparencia en el uso de datos externos.
