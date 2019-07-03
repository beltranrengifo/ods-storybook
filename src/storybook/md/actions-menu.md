## Actions Menu


###  Uso básico

Este componente está pensado para poder mostrar un menú flotante en cualquier parte de un proyecto. Está creado sobre la base del componente de popover y comparte muchas de las props disponibles. Permite, entre otras cosas, mostrar contenido scrollable con la barra de scroll del sistema.

El icono a mostrar debe referir a los disponibles en la tipografía de iconos del sistema de diseño, aunque es posible crear una nueva tipografía y añadir los estilos necesarios: `icon`

En vez icono es posible usar un texto: `text`

En vez icono o texto es posible usar una imagen: `img`

Es posible añadir una clase CSS personalizada con la prop `customClass`

Es posible controlar el ancho del popover con la prop `width` y el ancho del popoevr en mobile con la proiedad `mobileWidth`. El breakpoint usado para esta media query es `$--bp-tablet-portrait` (max-width: 1023px)
Por defecto, la altura máxima que puede alcanzar el menú es de `max-height: calc(100vh - 130px)`, si existe overflow se generará scroll. Es posible modificar este valor atacando directamente a la clase CSS `.ods-actions-menu__scroll-area`. Si el contenido no supera este valor, la altura se adapta automáticamente.

###  Eventos

Es posible ejecutar métodos propios en el show y en el hide del popover con las props `onShowEvent` y `onHideEvent`.

Una vez activadas estas props, se puede establecer qué funciones se ejecutarán con los eventos `@show` y `@hide`.

Es posible contener el popover dentro de un elemento padre para que nmunca se muestre por fuera del él usando `boundariesElement` y pasando el elemento del DOM que queremos usar como referencia.

```
<ods-actions-menu
  customClass="my-custom-popover"
  icon="home">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
</ods-col>
```
```
<ods-actions-menu
  customClass="my-custom-popover"
  text="Luis López">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
```
```
<ods-actions-menu
  customClass="my-custom-popover"
  img="public/avatar.svg">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
```
```
<ods-actions-menu
  customClass="my-custom-popover"
  text="Custom width"
  width="400"
  mobileWidth="220">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
```
```
<ods-actions-menu
  customClass="my-custom-popover"
  text="Custom position"
  popoverPosition="left-start"
  mobilePopoverPosition="bottom-start">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
```
```
<ods-actions-menu
  customClass="my-custom-popover"
  text="Element boundaries"
  boundariesElement="body">
  <ul>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
    <li>My content</li>
  </ul>
</ods-actions-menu>
```

###  Atributos
| Atributo       | Descripción                              | Tipo           | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | -------------- | ---------------------------------------- | ---------------------------------------- |
| icon           | Establece el icono a mstrar en el botón  | String         | Todos los iconos del sistema             | -                                        |
| text           | Establece el texto a mstrar en el botón  | String         | -                                        | -                                        |
| img            | Establece la imagen a mstrar en el botón | String         | La ruta al la imagen                     | -                                        |
| customClass    | Establece una clase css para el popover  | String         | -                                        | -                                        |
| width          | Establece el ancho del popover           | String         | -                                        | 224                                      |
| mobileWidth    | Ancho del popover por debajo de 1023     | String         | -                                        | -                                        |
| onShowEvent    | Activa el evento @show                   | Boolean        | -                                        | false                                    |
| onHideEvent    | Activa el evento @hide                   | Boolean        | -                                        | false                                    |

###  Eventos
| Nombre de Evento | Descripción                              | Valores                                  |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| show             | se dispara cuando se muestra             | El nombre del método que se ejecutará    | 
| hide             | se dispara cuando se oculta              | El nombre del método que se ejecutará    | 
