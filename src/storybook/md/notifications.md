# Notification

Muestra un mensaje de notificación global en una esquina de la página.

## Uso básico

El sistema de diseño ha registrado el método `$notify` que recibe un objeto como parámetro. En el caso más sencillo, puedes establecer el campo de `title` y el campo de `message` para el título y el cuerpo de la notificación. De forma predeterminada, la notificación se cierra automáticamente después de 4500ms, pero configurando `duration` se puede controlar su duración. Específicamente, si está configurado en `0`, no se cerrará automáticamente. Ten en cuenta que `duration` recibe un `Number` en milisegundos.

```
<template>
  <ods-row>
    <ods-col :span="24">
      <ods-button
        type="secondary"
        @click="open">
        Se cierra automáticamente
      </ods-button>
      <ods-button
        type="secondary"
        @click="open2">
        No se cierra automáticamente
      </ods-button>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    methods: {
      open () {
        this.$notify({
          title: "Mi título",
          message: "Notificación básica que se cierra en 4500ms"
        })
      },
      open2 () {
        this.$notify({
          title: "Mi título",
          message: "Notificación básica que no se cierra",
          duration: 0
        })
      }
    }
  }
</script>
```

## Añadir un enlace a la notificación

Es posible añadir un link dentro de la notificación que navegue a una página de destino, ya sea interna o externa. 

Para poder navegar a otras vistas de la propia app **usando el router**, es necesario crear un componente dentro del componente Notification mediante una _render function_. Usando la prop _message_, en vez de enviar un `string`, ejecutamos el método  **`$createElement`** con dos argumentos: 1º, el componente que queremos crear, **`OdsNotificationLink`**, y 2º un objeto con las props disponibles:
* **`linkText`**:  Texto para el enlace.
* **`message`**:  Texto para el mensaje, equivalente a la prop habitual `message` de Notification.
* **`parentRouter`**:  el objeto Router de la instancia de Vue. No deberías tener que cambiar su valor.
* **`to`**:  Destino del router-link.
* **`href`**:  En caso de querer usar un enlace externo, puedes especificar un link en la prop `href`, que se abrirá en una ventana/pestaña nueva. Si especificas la prop `parentRouter` esta prop **no actuará**.

```
<template>
  <ods-row>
    <ods-col :span="24">
      <ods-button
      type="secondary"
      @click="open3">
      Con link externo
      </ods-button>
      <ods-button
      type="secondary"
      @click="open4">
      Con router link
      </ods-button>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    methods: {
      open3 () {
        this.$notify({
          title: "Notificación con link externo",
          duration: 0,
          message: this.$createElement("OdsNotificationLink", {
            props: {
              href: "https://vuejs.org/",
              linkText: "Link externo",
              message: "Este mensaje no se cerrará de manera automática y tiene un link externo"
            }
          })
        })
      },

      open4 () {
        this.$notify({
          title: "Notificación con router link",
          duration: 10000,
          type: "success",
          message: this.$createElement("OdsNotificationLink", {
            props: {
              parentRouter: this.$router,
              to: "/components/list",
              linkText: "Router link",
              message: "Este mensaje se cerrará en 10 segundos y tiene un router link"
            }
          })
        })
      }
    }
  }
</script>
```

## Eventos **`onClick`**, **`OnClose`**

Puedes ejecutar un método en estos eventos, añadiendo la función al objeto de configuración.
 
```
<template>
  <ods-row>
    <ods-col :span="24">
      <ods-button
      type="secondary"
      @click="notify">
      Eventos
      </ods-button>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    methods: {
      notify () {
        this.$notify({
          title: "Notificación",
          duration: 0,
          message: "Este mensaje ejecuta un método si clickas sobre él y cuando lo cierras",
          onClick: this.click,
          onClose: this.close,
        })
      },
      click () {
        console.log("Notification has been clicked!")
      },
      close () {
        console.log("Notification has been closed!")
      }
    }
  }
</script>
```

## Tipos de notificaciones

El sistema proporciona cuatro tipos de notificación por defecto: **`success`, `warning`, `info`** y **`error`**. Se definen por el campo **`type`**  y se ignorarán otros valores. También se han registrado métodos para estos tipos que se pueden invocar directamente como en el ejemplo `open5` y `open6` sin pasar un campo `type`.

```
<template>
  <ods-button
    type="secondary"
    @click="open3">
    Success
  </ods-button>
  <ods-button
    type="secondary"
    @click="open4">
    Warning
  </ods-button>
  <ods-button
    type="secondary"
    @click="open5">
    Info
  </ods-button>
  <ods-button
    type="secondary"
    @click="open6">
    Error
  </ods-button>
</template>

<script>
  {
    methods: {
      open3() {
        this.$notify({
          title: "Success",
          message: "This is a success message",
          type: "success"
        })
      },

      open4() {
        this.$notify({
          title: "Warning",
          message: "This is a warning message",
          type: "warning"
        })
      },

      open5() {
        this.$notify.info({
          title: "Info",
          message: "This is an info message"
        })
      },

      open6() {
        this.$notify.error({
          title: "Error",
          message: "This is an error message"
        })
      }
    }
  }
</script>
```

## Posicion personalizada

La notificación puede posicionarse en cualquier esquina de la pantalla.

El atributo **`position`** define desde qué esquina se desliza la notificación. Puede ser **`top-right`, `top-left`, `bottom-right` o `bottom-left`**. Predeterminado: `top-right`.

```
<template>
  <ods-button
    type="secondary"
    @click="open7">
    Top Right
  </ods-button>
  <ods-button
    type="secondary"
    @click="open8">
    Bottom Right
  </ods-button>
  <ods-button
    type="secondary"
    @click="open9">
    Bottom Left
  </ods-button>
  <ods-button
    type="secondary"
    @click="open10">
    Top Left
  </ods-button>
</template>

<script>
  {
    methods: {
      open7() {
        this.$notify({
          title: "Custom Position",
          message: "I\'m at the top right corner"
        })
      },

      open8() {
        this.$notify({
          title: "Custom Position",
          message: "I\'m at the bottom right corner",
          position: "bottom-right"
        })
      },

      open9() {
        this.$notify({
          title: "Custom Position",
          message: "I\'m at the bottom left corner",
          position: "bottom-left"
        })
      },

      open10() {
        this.$notify({
          title: "Custom Position",
          message: "I\'m at the top left corner",
          position: "top-left"
        })
      }
    }
  }
</script>
``` 

## Desplazamiento

Personalizar el desplazamiento de notificación desde el borde de la pantalla.

Configure el atributo `offset` para personalizar el desplazamiento de la notificación desde el borde de la pantalla. Tenga en cuenta que cada instancia de la notificación del mismo momento debe tener el mismo desplazamiento.

```
<template>
  <ods-button
    type="secondary"
    @click="open11">
    Notification with offset
  </ods-button>
</template>

<script>
  {
    methods: {
      open11() {
        this.$notify.success({
          title: "Success",
          message: "This is a success message",
          offset: 100
        })
      }
    }
  }
</script>
```

## Usando cadenas HTML

`message` soporta cadenas HTML. Configure `dangerouslyUseHTMLString` a true y `message` se tratará como una cadena HTML.

```
<template>
  <ods-button
    type="secondary"
    @click="open12">
    Use HTML String
  </ods-button>
</template>

<script>
  {
    methods: {
      open12() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        })
      }
    }
  }
</script>
``` 

## Advertencia

Aunque la propiedad `message` soporta cadenas HTML, el renderizado dinámico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir fácilmente a [ataques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Por lo tanto, cuando `dangerouslyUseHTMLString` está a true, por favor asegúrese de que el contenido del mensaje es confiable, y **nunca** asigne `message` al contenido proporcionado por el usuario.

##  Ocultar boton de cerrar

Es posible ocultar el botón de cerrar

Configure el atributo `showClose` como `false` para que el usuario no pueda cerrar la notificación.

```
<template>
  <ods-button
    type="secondary"
    @click="open13">
    Hide close button
    </ods-button>
</template>

<script>
  {
    methods: {
      open13() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        })
      }
    }
  }
</script>
```
 * _______

## Método global

El sistema tiene preinstalado el método global **`$notify`** para Vue.prototype. Así que en una instancia de Vue se puede llamar a `Notification` como lo hacemos en esta página.

## Importar localmente

Importar `Notification`:

En este caso, debe llamar a `Notification(options)`. También se han registrado métodos para diferentes tipos, e.j. `Notification.success(options)`. 

Puede llamar al metodo `Notification.closeAll()` para cerrar manualmente todas las instancias.

```
import { Notification } from "element-ui"
```

## Opciones
| Atributo                 | Descripción                              | Tipo             | Valores aceptados                        | Por defecto |
| ------------------------ | ---------------------------------------- | ---------------- | ---------------------------------------- | ----------- |
| title                    | titulo                                   | string           | —                                        | —           |
| message                  | mensaje                                  | string/Vue.VNode | —                                        | —           |
| dangerouslyUseHTMLString | si  `message` es tratado como una cadena HTML | boolean          | —                                        | false       |
| type                     | tipo de notificacion                     | string           | success/warning/info/error               | —           |
| iconClass                | clase personalizada de icono. Será anulado por `type` | string           | —                                        | —           |
| customClass              | nombre de clase personalizado para la notificacion | string           | —                                        | —           |
| duration                 | duracion antes de cerrar. Si no se quiere que se cierre automaticamente este valor debe estar a 0 | number           | —                                        | 4500        |
| position                 | posicion personalizada                   | string           | top-right/top-left/bottom-right/bottom-left | top-right   |
| showClose                | si se muestra el boton de cerrar         | boolean          | —                                        | true        |
| onClose                  | funcion que se ejecuta cuando la notificación se cierra | function         | —                                        | —           |
| onClick                  | funcion que se ejecuta cuando se hace click en la notificación | function         | —                                        | —           |
| offset                   | desplazamiento desde el borde superior de la pantalla. Cada instancia de notificación del mismo momento debe tener siempre el mismo desplazamiento. | number           | —                                        | 0           |

## Metodos
`Notification` y `this.$notify` devuelven la instancia de la notificacion actual. Para cerrar manualmente la instancia, se puede llamar `close` para ello.

| Metodo | Descripción            |
| ------ | ---------------------- |
| close  | cierra la notificación |
