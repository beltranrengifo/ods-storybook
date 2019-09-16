# Popover

## Uso básico

Similar a un Tooltip, Popover está construido con `Vue-popper`. Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.

Agrega `ref` al popover, luego en el botón usa la directiva `v-popover` para asociar el botón y el popover. El atributo `trigger` es usado para definir como el popover se dispara: `hover`, `click` o `focus`. De manera alternativa puede especificar la referencia utilizando un [slot con nombre](https://vuejs.org/v2/guide/components.html#Named-Slots).

```
<ods-popover
  ref="popover1"
  placement="top-start"
  title="Title"
  width="200"
  trigger="hover"
  content="this is content, this is content, this is content">
</ods-popover>

<ods-popover
  ref="popover2"
  placement="bottom"
  title="Title"
  width="200"
  trigger="click"
  content="this is content, this is content, this is content">
</ods-popover>

<ods-button v-popover:popover1>Hover to activate</ods-button>
<ods-button v-popover:popover2>Click to activate</ods-button>
<ods-popover
  placement="right"
  title="Title"
  width="200"
  trigger="focus"
  content="this is content, this is content, this is content">
  <ods-button slot="reference">Focus to activate</ods-button>
</ods-popover>
```

##  Información anidada

Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.

Reemplaza el atributo `content` con un `slot`.

```
<ods-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="click">
  <ods-table :data="gridData">
    <ods-table-column width="150" property="date" label="date"></ods-table-column>
    <ods-table-column width="100" property="name" label="name"></ods-table-column>
    <ods-table-column width="300" property="address" label="address"></ods-table-column>
  </ods-table>
</ods-popover>

<ods-button v-popover:popover4>Click to activate</ods-button>

<script>
  {
    data() {
      return {
        gridData: [{
          date: "2016-05-02",
          name: "Jack",
          address: "New York City"
        }, {
          date: "2016-05-04",
          name: "Jack",
          address: "New York City"
        }, {
          date: "2016-05-01",
          name: "Jack",
          address: "New York City"
        }, {
          date: "2016-05-03",
          name: "Jack",
          address: "New York City"
        }]
      }
    }
  }
</script>
```

##  Operación anidada

Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un `dialog`.

```
<ods-popover
  ref="popover5"
  placement="top"
  width="160"
  v-model="visible2">
  <p>Are you sure to delete this?</p>
  <div style="text-align:right; margin: 0">
    <ods-button size="mini" type="text" @click="visible2 = false">cancel</ods-button>
    <ods-button type="primary" size="mini" @click="visible2 = false">confirm</ods-button>
  </div>
</ods-popover>

<ods-button v-popover:popover5>Delete</ods-button>

<script>
  {
    data() {
      return {
        visible2: false,
      }
    }
  }
</script>
```

## Atributos
| Atributo       | Descripción                              | Tipo           | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | -------------- | ---------------------------------------- | ---------------------------------------- |
| trigger        | cómo se dispara el popover               | string         | click/focus/hover/manual                 | click                                    |
| title          | título del popover                       | string         | —                                        | —                                        |
| content        | contenido del popover, puede ser sustituido por un `slot` | string         | —                                        | —                                        |
| width          | ancho del popover                        | string, number | —                                        | Min width 150px                          |
| placement      | posición del popover en la pantalla      | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                   |
| disabled       | si el popover está deshabilitado         | boolean        | —                                        | false                                    |
| value(v-model) | si el popover está visible               | Boolean        | —                                        | false                                    |
| offset         | popover offset                           | number         | —                                        | 0                                        |
| transition     | popover transition animation             | string         | —                                        | ods-fade-in-linear                        |
| visible-arrow  | si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a [Vue-popper](https://github.com/element-component/vue-popper) | boolean        | —                                        | true                                     |
| popper-options | parámetros para [popper.js](https://popper.js.org/documentation.html) | object         | por favor, refiérase a [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: "body", gpuAcceleration: false }` |
| popper-class   | clase propia para popover                | string         | —                                        | —                                        |
| open-delay     | retraso de la aparición cuando `trigger` es hover, en milisegundos | number         | —                                        | —                                        |

## Slot
| Nombre    | Descripción                          |
| --------- | ------------------------------------ |
| —         | texto contenido en popover           |
| reference | elemento HTML que dispara el popover |

## Eventos
| Nombre del evento | Descripción                             | Parámetros |
| ----------------- | --------------------------------------- | ---------- |
| show              | se dispara cuando se muestra el popover | —          |
| after-enter       | se dispara cuando la transicion de entrada termina | —       |
| hide              | se dispara cuando se oculta el popover  | —          |
| after-leave       | se dispara cuando la transicion de salida termina | —        |
